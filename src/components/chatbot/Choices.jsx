/* eslint-disable react/prop-types */import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { questions } from "../../assets/data";
import api from "../../assets/api";
import Sender from "../chatbot/Sender";
import Receiver from "../chatbot/Receiver";

function Choices({ animate }) {
	const [conversation, setConversation] = useState([]); // State to store conversation
	const [inputMessage, setInputMessage] = useState(""); // State for the input field
	const bottomRef = useRef(null); // Reference for the bottom of the conversation

	const handleQuestionClick = async (question) => {
		const timeSent = new Date().toLocaleTimeString(); // Get current time

		// Add the user's question to the conversation
		setConversation((prevConversation) => [...prevConversation, { type: "user", content: question, timeSent }]);

		try {
			const token = localStorage.getItem("authToken"); // Get token from localStorage (or wherever it's stored)
			const result = await api.post(
				"/api/chatbot/",
				{ question },
				{
					headers: {
						Authorization: `Bearer ${token}`, // Add token to the headers
					},
				}
			);
			// Add the bot's response to the conversation with time sent
			setConversation((prevConversation) => [
				...prevConversation,
				{ type: "bot", content: result.data.answer, timeSent: new Date().toLocaleTimeString() },
			]);
		} catch (error) {
			console.error(error);
			setConversation((prevConversation) => [
				...prevConversation,
				{ type: "bot", content: "Error fetching response", timeSent: new Date().toLocaleTimeString() },
			]);
		}
	};

	// Handle sending the message from the input field
	const handleSendMessage = () => {
		if (inputMessage.trim()) {
			handleQuestionClick(inputMessage); // Reuse the same logic for input field submission
			setInputMessage(""); // Clear the input field after sending
		}
	};

	// Scroll to the bottom when the conversation updates
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [conversation]);

	return (
		<>
			<div className="relative">
				<motion.div
					className="flex flex-row justify-evenly flex-wrap mt-14"
					initial="hidden"
					animate={animate ? "visible" : "hidden"}
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.1,
							},
						},
						hidden: {
							transition: {
								staggerChildren: 0.1,
							},
						},
					}}>
					{questions.map((question, index) => (
						<motion.p
							key={question.id}
							className="bg-purple-700 mb-6 text-white py-6 px-4 rounded-xl w-[150px] text-center flex items-center justify-center shadow-2xl cursor-pointer"
							initial={{ x: -100, opacity: 0 }}
							animate={{
								x: animate ? 0 : -100,
								opacity: animate ? 1 : 0,
							}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 20,
								delay: animate ? index * 0.1 : 0,
							}}
							onClick={() => handleQuestionClick(question.question)} // Send API request on click
						>
							{question.question}
						</motion.p>
					))}
				</motion.div>

				{/* Display the conversation between user and bot */}
				<div className="conversation-stack mt-8 mb-24">
					{conversation.map((message, index) =>
						message.type === "user" ? (
							<Sender
								key={index}
								userQuestion={message.content}
								timeSent={message.timeSent} // Pass timeSent to Sender
							/>
						) : (
							<Receiver
								key={index}
								botResponse={message.content}
								timeSent={message.timeSent} // Pass timeSent to Receiver
							/>
						)
					)}
					{/* Invisible div to maintain scroll position */}
					<div ref={bottomRef} />
				</div>

				<div className="fixed bottom-0 w-full h-24 bg-gradient-to-t from-purple-800"></div>

				{/* Input field for sending message */}
				<div className="sticky bottom-4 w-[95%] mx-auto bg-white flex px-1 py-1 rounded-full border border-purple-500 overflow-hidden font-[sans-serif]">
					<input
						type="text"
						placeholder="Ask something..."
						className="w-full outline-none bg-white pl-4 text-sm"
						value={inputMessage}
						onChange={(e) => setInputMessage(e.target.value)} // Update input field
						onKeyPress={(e) => {
							if (e.key === "Enter") handleSendMessage(); // Send message on Enter
						}}
					/>
					<button
						type="button"
						className="bg-purple-600 hover:bg-purple-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
						onClick={handleSendMessage} // Send message on click
					>
						Send
					</button>
				</div>
			</div>
		</>
	);
}

export default Choices;
