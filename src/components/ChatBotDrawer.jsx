/* eslint-disable react/prop-types */
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Chatbot from "./Chatbot";

export default function ChatBotDrawer({ isOpen, setIsOpen }) {
	const toggleDrawer = (open) => (event) => {
		if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}
		setIsOpen(open); // Update the parent state
	};

	return (
		<SwipeableDrawer
			anchor="right"
			open={isOpen}
			onClose={toggleDrawer(false)} // Close drawer onClose
			onOpen={toggleDrawer(true)}
			sx={{
				"& .MuiBackdrop-root": {
					backgroundColor: "rgba(0, 0, 0, 0)", // Set backdrop opacity to 0
				},
			}}>
			<div className="w-[320px] sm:w-[670px]">
				<Chatbot
					animate={isOpen}
					setIsOpen={setIsOpen}
				/>
			</div>
		</SwipeableDrawer>
	);
}
