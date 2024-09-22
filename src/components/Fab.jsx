import ThreePIcon from "@mui/icons-material/ThreeP";import ChatBotDrawer from "./ChatBotDrawer";import { useState } from "react";
function Fab() {
	const [isChatBotOpen, setChatBotOpen] = useState(false);

	const showChatBot = () => {
		setChatBotOpen(true); // Open the drawer
	};
  return (
		<>
			<div
				onClick={showChatBot}
				className="fixed bg-purple-700 p-4 bottom-8 right-8 text-white rounded-full shadow-xl animate-bounce cursor-pointer">
				<ThreePIcon fontSize="large" />
			</div>
			<ChatBotDrawer
				isOpen={isChatBotOpen}
				setIsOpen={setChatBotOpen}
			/>
		</>
	);
}

export default Fab;
