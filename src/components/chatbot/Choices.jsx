/* eslint-disable react/prop-types */import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { questions } from "../../assets/data";
import api from "../../assets/api";
import Sender from "../chatbot/Sender";
import Receiver from "../chatbot/Receiver";

function Choices({ animate }) {
	const [conversation, setConversation] = useState([]); // State to store conversation
	const bottomRef = useRef(null); // Reference for the bottom of the conversation

	const handleQuestionClick = async (question) => {
		const timeSent = new Date().toLocaleTimeString(); // Get current time

		// Add the user's question to the conversation
		setConversation((prevConversation) => [...prevConversation, { type: "user", content: question, timeSent }]);

		try {
			const result = await api.post("/api/chatbot/", { question });
			// Add the bot's response to the conversation with time sent
			setConversation((prevConversation) => [
				...prevConversation,
				{ type: "bot", content: result.data.answer, timeSent: new Date().toLocaleTimeString() },
			]);
		} catch (error) {
			setConversation((prevConversation) => [
				...prevConversation,
				{ type: "bot", content: "Error fetching response", timeSent: new Date().toLocaleTimeString() },
			]);
		}
	};

	// Scroll to the bottom when the conversation updates
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [conversation]);

	return (
		<>
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
			<div className="conversation-stack mt-8">
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
		</>
	);
}

export default Choices;
