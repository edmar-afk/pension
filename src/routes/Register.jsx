/* eslint-disable react/prop-types */ import { useState, useEffect } from "react";
import api from "../assets/api";
function Register({ handleBack, back }) {
	const [firstName, setFirstName] = useState("");
	const [mobileNum, setMobileNum] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState(""); // State to handle success message


	// Function to check if passwords match
	const checkPasswordsMatch = () => {
		if (password && password2 && password !== password2) {
			setError("Passwords do not match");
		} else {
			setError((prevError) => (prevError === "Passwords do not match" ? "" : prevError));
		}
	};

	// Function to validate mobile number
	const validateMobileNum = (value) => {
		const regex = /^09\d{9}$/;
		if (!regex.test(value)) {
			setError("Please enter an 11-digit number starting with '09'.");
		} else {
			setError((prevError) => (prevError !== "Please enter an 11-digit number starting with '09'." ? prevError : ""));
		}
	};

	const handleMobileNumChange = (e) => {
		const value = e.target.value;
		setMobileNum(value);
		validateMobileNum(value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handlePassword2Change = (e) => {
		setPassword2(e.target.value);
	};

	useEffect(() => {
		checkPasswordsMatch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [password, password2]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const res = await api.post("/api/register/", {
				first_name: firstName,
				username: mobileNum,
				password: password,
				password2: password2,
			});

			if (res.status === 201) {
				// Set success message and switch to Login view
				setSuccessMessage("You have successfully registered! Please login.");
				handleBack("You have successfully registered! Please login."); // Hide Register and show Login
			} else {
				setError("Registration failed.");
			}
		} catch (error) {
			let errorMessage = "Registration failed";

			if (error.response) {
				if (error.response.data && typeof error.response.data === "object") {
					errorMessage = Object.values(error.response.data).join(" ");
				} else if (error.response.data && error.response.data.detail) {
					errorMessage = error.response.data.detail;
				}
			}

			setError(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{successMessage ? (
				<div className="text-green-500 text-center">{successMessage}</div>
			) : (
				<div className="pt-12 sm:pt-24 flex flex-col items-center justify-center">
					<div className="flex flex-col items-center w-full p-4 m-4">
						<div className="w-full px-2 sm:px-12 py-4">
							<form onSubmit={handleSubmit}>
								<div className="mb-12">
									<h3 className="text-gray-800 text-3xl font-extrabold">Register</h3>
								</div>
								<div>
									<label className="text-gray-800 text-xs block mb-2">Full Name</label>
									<input
										type="text"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										required
										className="w-full text-gray-800 text-sm bg-white border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
										placeholder="Enter your full name"
									/>
								</div>

								<div className="mt-8">
									<label className="text-gray-800 text-xs block mb-2">Mobile Number</label>
									<input
										type="tel"
										value={mobileNum}
										onChange={handleMobileNumChange}
										required
										className="w-full text-gray-800 text-sm bg-white border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
										placeholder="09XXXXXXXXX"
									/>
								</div>

								<div className="mt-8">
									<label className="text-gray-800 text-xs block mb-2">Password</label>
									<input
										type="password"
										value={password}
										onChange={handlePasswordChange}
										required
										className="w-full text-gray-800 text-sm bg-white border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
										placeholder="Enter password"
									/>
								</div>

								<div className="mt-8">
									<label className="text-gray-800 text-xs block mb-2">Confirm Password</label>
									<input
										type="password"
										value={password2}
										onChange={handlePassword2Change}
										required
										className="w-full text-gray-800 text-sm bg-white border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
										placeholder="Confirm your password"
									/>
								</div>

								<div className="mt-12 flex flex-row">
									<button
										type="submit"
										className="w-full shadow-xl py-2.5 px-4 mx-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
										{loading ? "Signing up..." : "Sign Up"}
									</button>
									<button
										onClick={back} // Back button triggers handleBack
										className="w-full shadow-xl py-2.5 px-4 mx-4 text-sm tracking-wide rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none">
										Back
									</button>
								</div>

								{error && <div className="mt-4 text-red-500">{error}</div>}
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Register;
