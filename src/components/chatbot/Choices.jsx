import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { questions, support } from "../../assets/data";
import api from "../../assets/api";
import Sender from "../chatbot/Sender";
import Receiver from "../chatbot/Receiver";

function Choices({ animate }) {
	const [conversation, setConversation] = useState([]); // State to store conversation
	const [inputMessage, setInputMessage] = useState(""); // State for the input field
	const [showQuestions, setShowQuestions] = useState(true); // State for showing questions
	const [matchedSupport, setMatchedSupport] = useState(null); // State for matched support data
	const [showMatchedSupport, setShowMatchedSupport] = useState(false); // State to control visibility of matched support
	const bottomRef = useRef(null); // Reference for the bottom of the conversation

	const normalizeText = (text) => {
		return text
			.replace(/₱/g, "P") // Replace peso sign with a plain 'P'
			.replace(/â‚±/g, "₱") // Replace any unwanted characters with a proper peso sign
			.replace(/[^\w\s]/g, "") // Remove any non-alphanumeric characters (optional)
			.toLowerCase(); // Make case-insensitive for better matching
	};

	const handleQuestionClick = async (question) => {
		const timeSent = new Date().toLocaleTimeString(); // Get current time

		// Add the user's question to the conversation
		setConversation((prevConversation) => [...prevConversation, { type: "user", content: question, timeSent }]);

		try {
			const result = await api.post("/api/chatbot/", { question });
			const botResponse = result.data.answer;

			// Add the bot's response to the conversation with time sent
			setConversation((prevConversation) => [
				...prevConversation,
				{ type: "bot", content: botResponse, timeSent: new Date().toLocaleTimeString() },
			]);

			// Normalize the bot response
			const normalizedBotResponse = normalizeText(botResponse);

			// Check if the normalized response matches any trigger in the support array
			let matched = support.find((item) => {
				const normalizedTrigger = normalizeText(item.trigger);
				return normalizedBotResponse.includes(normalizedTrigger); // Check if bot response contains the trigger
			});

			// If no match is found, use the default FAQs
			if (!matched) {
				// Fallback to the default FAQs
				matched = support.find((item) => item.trigger === "Default FAQs");
			}

			// Set matched support data with a 3-second delay
			setTimeout(() => {
				setMatchedSupport(matched); // Set the matched support data (either specific or default)
				setShowMatchedSupport(true); // Show matched support
				// Scroll to the bottom after matched support is shown
				bottomRef.current?.scrollIntoView({ behavior: "smooth" });
			}, 3000);
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

	// Scroll to the bottom with a delay when questions are toggled
	const toggleQuestions = () => {
		setShowQuestions((prevShowQuestions) => {
			const newShowQuestions = !prevShowQuestions;
			if (newShowQuestions) {
				// Set a timeout to scroll after a delay
				setTimeout(() => {
					bottomRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to bottom when questions are shown
				}, 1000); // 1 second delay
			}
			return newShowQuestions; // Return the new state
		});
	};

	// Handle clicking a matched support question
	const handleSupportQuestionClick = (question) => {
		handleQuestionClick(question); // Send the support question to the chatbot
		setShowMatchedSupport(false); // Hide matched support after clicking
	};

	// Handle hiding matched support
	const handleHideMatchedSupport = () => {
		setShowMatchedSupport(false);
	};

	return (
		<>
			<div className="relative">
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

				{showQuestions && (
					<motion.div
						className="flex flex-row justify-evenly flex-wrap mt-14 mb-8"
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
								className="text-xs bg-[#d98ab5] mb-6 text-white p-4 rounded-xl w-[150px] text-center flex items-center justify-center shadow-2xl cursor-pointer"
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
								onClick={() => {
									handleQuestionClick(question.question); // Send API request on click
									setShowQuestions(false); // Hide questions when one is clicked
								}}>
								{question.question}
							</motion.p>
						))}
					</motion.div>
				)}

				{/* Render matched support information with animation */}
				{matchedSupport && showMatchedSupport && (
					<motion.div
						className="bg-gray-100 p-4 rounded-lg mt-4 bottom-16 sticky"
						initial={{ opacity: 0, y: -20 }} // Start hidden
						animate={{ opacity: 1, y: 0 }} // Fade in and slide down
						exit={{ opacity: 0, y: -20 }} // Fade out and slide up
						transition={{ duration: 0.3 }} // Animation duration
					>
						<div className="flex flex-row justify-between items-center text-gray-600">
							<h4 className="text-lg font-semibold mb-2">You might also ask</h4>
							<p
								className="cursor-pointer text-blue-600 hover:underline"
								onClick={handleHideMatchedSupport} // Only this button will hide the matched section
							>
								Hide
							</p>
						</div>
						<ul className="list-none ml-6 mt-2 flex justify-start sm:justify-evenly flex-wrap">
							{matchedSupport.questions.map((q) => (
								<li
									key={q.id}
									className="cursor-pointer text-xs text-gray-900 hover:underline bg-purple-50 my-1 py-1.5 px-3 rounded-md"
									onClick={() => handleSupportQuestionClick(q.question)} // Clicking a question will NOT hide matched support
								>
									{q.question}
								</li>
							))}
						</ul>
					</motion.div>
				)}

				{/* Input field for sending message */}
				<div className="sticky bottom-4 w-[95%] mx-auto bg-white flex px-1 py-1 rounded-full border border-purple-500 overflow-hidden font-[sans-serif]">
					<div
						className="p-2 bg-purple-700 rounded-full text-white"
						onClick={toggleQuestions}>
						<p>FAQ</p>
					</div>
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
						className="bg-[#d98ab5] hover:bg-[#d98ab5] transition-all text-white text-sm rounded-full px-5 py-2.5"
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
