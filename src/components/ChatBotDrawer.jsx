/* eslint-disable react/prop-types */import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Chatbot from "./Chatbot";
import CheckUser from "./authentication/CheckUser";

export default function ChatBotDrawer({ isOpen, setIsOpen }) {
	const userData = JSON.parse(localStorage.getItem("userData"));
	
	const toggleDrawer = (open) => (event) => {
		if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}
		setIsOpen(open); // Update the parent state
	};

	return (
		<>
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
				<div className="w-[350px] sm:w-[670px]">
					{/* Conditionally render Chatbot if userData.id exists, otherwise CheckUser */}
					{userData?.id ? (
						<Chatbot
							animate={isOpen}
							setIsOpen={setIsOpen}
							name={userData.first_name}
						/>
					) : (
						<CheckUser />
					)}
				</div>
			</SwipeableDrawer>
		</>
	);
}
