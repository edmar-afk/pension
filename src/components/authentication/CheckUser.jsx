/* eslint-disable react/no-unescaped-entities */import { useState } from "react";import checkerBg from "../../assets/svg/loginChecker.svg";import Login from "../../routes/Login";
import Register from "../../routes/Register";

function CheckUser() {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);
	const [successMessage, setSuccessMessage] = useState(""); // State for success message

	// Function to show the initial CheckUser div
	const handleBackToCheckUser = (message = "") => {
		setShowLogin(false);
		setShowRegister(false);
		setSuccessMessage(message); // Set the success message
	};

	const back = () => {
		setShowLogin(false);
		setShowRegister(false);
	}

	// Function to handle showing login
	const handleShowLogin = () => {
		setShowLogin(true);
		setShowRegister(false);
		setSuccessMessage(""); // Reset success message on new action
	};

	// Function to handle showing register
	const handleShowRegister = () => {
		setShowLogin(false);
		setShowRegister(true);
		setSuccessMessage(""); // Reset success message on new action
	};

	return (
		<>
			{/* Show the CheckUser parent div if neither Login nor Register is active */}
			{!showLogin && !showRegister && (
				<div className="flex flex-col justify-center items-center h-screen">
					<div id="checker">
						<img
							src={checkerBg}
							alt=""
							className="w-96 mx-auto"
						/>
						<p className="text-purple-600 font-bold text-2xl text-center">Ooops!</p>
						<p className="text-lg text-center mx-12 mt-4">
							The system detected that you didn't log in to our website. You don't have any active account. Login first
							or Register in order to use our service chatbot.
						</p>

						{/* Display the success message after returning from registration */}
						{successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}

						<div className="flex flex-row justify-evenly mt-12 w-full">
							{/* Button to show login */}
							<div
								className="bg-purple-600 text-white py-2 px-8 rounded-lg cursor-pointer hover:scale-110 duration-300 hover:shadow-2xl"
								onClick={handleShowLogin}>
								Login
							</div>
							{/* Button to show register */}
							<div
								className="text-purple-600 border-2 border-purple-600 py-2 px-8 rounded-lg cursor-pointer hover:scale-110 duration-300 hover:shadow-2xl"
								onClick={handleShowRegister}>
								Register
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Conditionally render Login and Register components */}
			{showLogin && <Login back={back} />}
			{showRegister && (
				<Register
					handleBack={handleBackToCheckUser}
					back={back}
				/>
			)}
		</>
	);
}

export default CheckUser;
