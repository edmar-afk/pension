/* eslint-disable react/no-unescaped-entities */import { useState } from "react";import ChatBotDrawer from "./ChatBotDrawer";

function Hero() {
	const [isChatBotOpen, setChatBotOpen] = useState(false);

	const showChatBot = () => {
		setChatBotOpen(true); // Open the drawer
	};

	return (
		<>
			<section className="pt-44 lg:pt-72 pb-24 w-full bg-[#d98ab5]/50">
				<div className="mx-auto relative text-center">
					<div className="px-4">
						<h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-200 mb-5 md:text-5xl leading-[50px]">
							Welcome to
							<span className="text-purple-900"> Bryne's 888 Pension House</span>
						</h1>
						<p className="max-w-sm mx-auto text-center text-xl font-normal leading-7 text-gray-100 mb-9">
							Smart Chatbot in Action Transforming customer services
						</p>
						<button
							onClick={showChatBot}
							className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-purple-600 shadow-xs hover:bg-purple-700 transition-all duration-500">
							Confused? Seek help from our chatbot now.
						</button>
					</div>
				</div>
			</section>

			{/* Pass setChatBotOpen to control drawer from the ChatBotDrawer component */}
			<ChatBotDrawer
				isOpen={isChatBotOpen}
				setIsOpen={setChatBotOpen}
			/>
		</>
	);
}

export default Hero;
