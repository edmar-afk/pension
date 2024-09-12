/* eslint-disable react/prop-types */ import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Sender({ userQuestion }) {
	return (
		<>
			<div className="flex items-end gap-2 mb-3 mr-4">
				<div className="ml-auto flex max-w-[70%] flex-col gap-2 rounded-l-xl rounded-tr-xl bg-purple-700 p-4 text-sm md:max-w-[60%] text-white">
					{userQuestion}
					<span className="ml-auto text-xs">11:34 AM</span>
				</div>
				<span className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-purple-300 text-sm font-bold tracking-wider  bg-purple-900 text-purple-300">
					<AccountCircleIcon className="text-white"/>
				</span>
			</div>
		</>
	);
}

export default Sender;
