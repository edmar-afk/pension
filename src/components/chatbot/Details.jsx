/* eslint-disable react/prop-types */ /* eslint-disable react/no-unescaped-entities */ import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
function Details({ name }) {
	return (
		<>
			<div className="flex flex-col mt-32 items-center justify-center px-4">
				<img
					src={logo}
					alt=""
					className="w-56"
				/>
				<Link
					to={"/logout"}
					className="bg-red-600 text-white py-1 px-4 rounded-xl my-4">
					Logout
				</Link>
				<p className="text-center">
					Hello <span className="font-bold text-purple-600">{name}</span> Need Clarifications? I'll answer anything just
					pick question below.
				</p>
			</div>
		</>
	);
}

export default Details;
