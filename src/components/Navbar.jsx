import { useState } from "react";import { NavLink } from "react-router-dom";import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/img/logo.png";
import ThreePIcon from "@mui/icons-material/ThreeP";
import ChatBotDrawer from "./ChatBotDrawer";

export default function NavBar() {
	const [anchorEl, setAnchorEl] = useState(null);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const [isChatBotOpen, setChatBotOpen] = useState(false);

	const showChatBot = () => {
		setChatBotOpen(true); // Open the drawer
	};
	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const navLinkStyles = ({ isActive }) => ({
		backgroundColor: isActive ? "#d98ab5" : "transparent",
		color: isActive ? "white" : "black",
		textDecoration: "none",
		padding: "8px 16px",
		borderRadius: "4px",
	});

	return (
		<>
			<AppBar
				position="fixed" // Change position to fixed
				sx={{
					padding: "3px",
					backgroundColor: "white",
					color: "black",
					width: "100%", // Make sure it stretches full width
				}}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}>
						<img
							src={logo}
							alt=""
							width={80}
						/>
					</Typography>

					{isMobile ? (
						<>
							<IconButton
								edge="start"
								color="inherit"
								aria-label="menu"
								onClick={handleMenuOpen}>
								<MenuIcon />
							</IconButton>

							<Menu
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleMenuClose}>
								<MenuItem onClick={handleMenuClose}>
									<NavLink
										to="/"
										style={navLinkStyles}>
										Home
									</NavLink>
								</MenuItem>

								<MenuItem onClick={handleMenuClose}>
									<NavLink
										to="/rooms"
										style={navLinkStyles}>
										Rooms
									</NavLink>
								</MenuItem>
								<MenuItem onClick={handleMenuClose}>
									<NavLink
										to="/events"
										style={navLinkStyles}>
										Events
									</NavLink>
								</MenuItem>
								<MenuItem onClick={handleMenuClose}>
									<NavLink
										to="/pricing"
										style={navLinkStyles}>
										Pricing
									</NavLink>
								</MenuItem>
							</Menu>
						</>
					) : (
						<Box sx={{ display: "flex", gap: 2 }}>
							<NavLink
								to="/"
								style={navLinkStyles}>
								Home
							</NavLink>

							<NavLink
								to="/rooms"
								style={navLinkStyles}>
								Rooms
							</NavLink>
							<NavLink
								to="/events"
								style={navLinkStyles}>
								Events
							</NavLink>
							{/* <NavLink
								to="/pricing"
								style={navLinkStyles}>
								Pricing
							</NavLink> */}
							<Button
								variant="contained"
								onClick={showChatBot}
								sx={{ backgroundColor: "#d98ab5", color: "#fff" }}>
								Chatbot
							</Button>
						</Box>
					)}
				</Toolbar>
			</AppBar>
			{/* Add padding to prevent content overlap */}
			<Box sx={{ paddingTop: "64px" }}>{/* Rest of the content goes here */}</Box>

			<ChatBotDrawer
				isOpen={isChatBotOpen}
				setIsOpen={setChatBotOpen}
			/>
		</>
	);
}
