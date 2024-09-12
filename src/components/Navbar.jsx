import { useState } from "react";
import logo from "../assets/img/logo.jpg";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ChatBotDrawer from "./ChatBotDrawer";
function Navbar() {
	const [isChatBotOpen, setChatBotOpen] = useState(false);

	const showChatBot = () => {
		setChatBotOpen(true); // Open the drawer
	};

	return (
		<>
			<nav className="w-full px-4 py-2 mx-auto bg-white bg-opacity-50 fixed top-0 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-50">
				<div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
					<img
						src={logo}
						alt=""
						className="w-14 rounded-lg"
					/>
					<div className="block">
						<ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
							<li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
								<button
									onClick={showChatBot}
									className="flex items-center text-purple-700">
									<SmartToyIcon
										className="mr-2"
										fontSize="large"
									/>
								</button>
							</li>
						</ul>
						<ChatBotDrawer
							isOpen={isChatBotOpen}
							setIsOpen={setChatBotOpen}
						/>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
