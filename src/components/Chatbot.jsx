/* eslint-disable react/prop-types */
import Choices from "./chatbot/Choices";
import Details from "./chatbot/Details";
import Header from "./chatbot/Header";
import Receiver from "./chatbot/Receiver";
import Sender from "./chatbot/Sender";

function Chatbot({ animate, setIsOpen }) {
	return (
		<>
			<Header setIsOpen={setIsOpen} />
			<Details/>
			<Choices animate={animate} />
			<div className="flex w-full flex-col gap-4 px-4"></div>
		</>
	);
}

export default Chatbot;
