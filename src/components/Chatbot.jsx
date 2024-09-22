/* eslint-disable react/prop-types */
import Choices from "./chatbot/Choices";
import Details from "./chatbot/Details";
import Header from "./chatbot/Header";

function Chatbot({ animate, setIsOpen, name }) {
	return (
		<>
			<Header setIsOpen={setIsOpen} />
			<Details name={name} />
			<Choices animate={animate} />
			<div className="flex w-full flex-col gap-4 px-4"></div>
		</>
	);
}

export default Chatbot;
