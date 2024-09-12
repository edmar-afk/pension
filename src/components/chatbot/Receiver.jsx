/* eslint-disable react/prop-types */ /* eslint-disable react/no-unescaped-entities */import SmartToyIcon from "@mui/icons-material/SmartToy";
function Receiver({ botResponse }) {
	return (
		<>
			<div className="flex items-end gap-2 mb-3 ml-4">
				<span className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-purple-300 text-sm font-bold tracking-wider  bg-purple-900 text-purple-300">
					<SmartToyIcon className="text-white" />
				</span>
				<div className="mr-auto flex max-w-[70%] flex-col gap-2 rounded-r-md rounded-tl-md p-4 md:max-w-[60%] bg-purple-900 text-purple-300">
					<span className="font-semibold text-white">Chatbot</span>
					<div className="text-sm text-white">{botResponse}</div>
					<span className="ml-auto text-xs text-white">11:32 AM</span>
				</div>
			</div>
		</>
	);
}

export default Receiver;
