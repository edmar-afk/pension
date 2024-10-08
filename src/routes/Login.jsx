/* eslint-disable react/prop-types */import { useState, useEffect } from "react";import { useLocation } from "react-router-dom";
import api from "../assets/api";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

const Login = ({ back }) => {
	const [username, setUsername] = useState(""); // username is the mobile number
	const [password, setPassword] = useState(""); // Initialize with an empty string
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const location = useLocation();

	useEffect(() => {
		if (location.state && location.state.successMessage) {
			setError(location.state.successMessage);
		}
	}, [location]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const res = await api.post("/api/token/", { username, password });

			if (res.status === 200) {
				localStorage.setItem("ACCESS_TOKEN", res.data.access);
				localStorage.setItem("REFRESH_TOKEN", res.data.refresh);

				const userRes = await api.get("/api/user/", {
					headers: {
						Authorization: `Bearer ${res.data.access}`,
					},
				});

				localStorage.setItem("userData", JSON.stringify(userRes.data));
				window.location.reload(); // Refresh the page after successful login
			} else {
				setError("Login failed.");
			}
		} catch (error) {
			setError("Invalid Username or Password");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="pt-12 sm:pt-24 flex flex-col items-center justify-center">
			<div className="flex flex-col items-center w-full p-4 m-4">
				<div className="w-full px-2 sm:px-12 py-4">
					<form onSubmit={handleSubmit}>
						<div className="mb-12">
							<h3 className="text-gray-800 text-3xl font-extrabold">Log in</h3>
						</div>

						<div>
							<label className="text-gray-800 text-xs block mb-2">Mobile Number</label>
							<div className="relative flex items-center">
								<input
									name="username"
									type="number"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									required
									className="w-full text-gray-800 bg-white text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
									placeholder="09XXXXXXXXX"
								/>
								<AccountCircleIcon className="text-[#d98ab5]"/>
							</div>
						</div>

						<div className="mt-8">
							<label className="text-gray-800 text-xs block mb-2">Password</label>
							<div className="relative flex items-center">
								<input
									name="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="w-full text-gray-800 bg-white text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
									placeholder="Enter password"
								/>
								<LockIcon className="text-[#d98ab5]"/>
							</div>
						</div>

						<div className="mt-12 flex flex-row">
							<button
								type="submit"
								className="w-full shadow-xl py-2.5 px-4 mx-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
								{loading ? "Signing in..." : "Sign in"}
							</button>
							<button
								type="button"
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
	);
};

export default Login;
