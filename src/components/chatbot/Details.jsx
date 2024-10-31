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
				
				<p className="text-center">
					Hello need clarifications? I'll answer anything just
					pick question below.
				</p>
			</div>
		</>
	);
}

export default Details;
