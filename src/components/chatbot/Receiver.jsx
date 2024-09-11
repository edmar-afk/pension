/* eslint-disable react/no-unescaped-entities */
function Receiver() {
	return (
		<>
			<div className="flex items-end gap-2">
				<img
					className="size-8 rounded-full object-cover"
					src="https://penguinui.s3.amazonaws.com/component-assets/avatar-8.webp"
					alt="avatar"
				/>
				<div className="mr-auto flex max-w-[70%] flex-col gap-2 rounded-r-md rounded-tl-md p-4 md:max-w-[60%] bg-purple-900 text-purple-300">
					<span className="font-semibold text-white">Penguin UI</span>
					<div className="text-sm text-white">
						I'm sorry to hear that. Let me guide you through the process to resolve it. Could you please provide your
						username?
					</div>
					<span className="ml-auto text-xs text-white">11:32 AM</span>
				</div>
			</div>
		</>
	);
}

export default Receiver;
