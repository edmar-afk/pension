/* eslint-disable react/prop-types *//* eslint-disable react/no-unescaped-entities */import { useEffect, useState } from "react";import SmartToyIcon from "@mui/icons-material/SmartToy";import room1 from "../../assets/videos/room1.mp4";import room2 from "../../assets/videos/room2.mp4";
import room3 from "../../assets/videos/room3.mp4";
import room4 from "../../assets/videos/room4.mp4";
import room5 from "../../assets/videos/room5.mp4";
import room6 from "../../assets/videos/room6.mp4";

function Receiver({ botResponse, timeSent }) {
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		let matchedVideo = null;

		if (
			botResponse.includes("Showing larger family-sized room that rates 850 for 12 hours and 1,500 for 24 hours.") ||
			botResponse.includes("Room 1 family sized room that rates 850 for 12 hours and 1,500  for 24 hours")
		) {
			matchedVideo = room1;
		} else if (
			botResponse.includes("Showing standard room that rates 650 for 12 hours and 950 for 24 hours.") ||
			botResponse.includes("Room 2 Standard room that rates 650 for 12 hours and 950 for 24 hours.")
		) {
			matchedVideo = room2;
		} else if (
			botResponse.includes("Showing another standard room that rates 650 for 12 hours and 950 for 24 hours.") ||
			botResponse.includes("Room 3 standard room that rates 650 for 12 hours and 950 for 24 hours.")
		) {
			matchedVideo = room3;
		} else if (
			botResponse.includes("Showing Deluxe or twin bed that rates are 1,000 for 12 hours and 1,800 for 24 hours.") ||
			botResponse.includes("Room 4 Deluxe or twin bed that rates 1,000 for 12 hours and 1,800 for 24 hours")
		) {
			matchedVideo = room4;
		} else if (
			botResponse.includes("Showing Deluxe that rates 750 for 12 hours and 1,200 for 24 hours.") ||
			botResponse.includes("Room 5 the Deluxe that rates 750 for 12 hours and 1,200 for 24 hours")
		) {
			matchedVideo = room5;
		} else if (
			botResponse.includes("Take a look at our exclusive VIP room.") ||
			botResponse.includes("Room 6 Non-aircon 500 for 24hours and 350 for 12hours")
		) {
			matchedVideo = room6;
		}

		if (matchedVideo) {
			const timer = setTimeout(() => {
				setSelectedVideo(matchedVideo);
			}, 1000);
			return () => clearTimeout(timer);
		} else {
			setSelectedVideo(null);
		}
	}, [botResponse]);

	return (
		<>
			<div className="flex items-end gap-2 mb-3 ml-4">
				<span className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-purple-300 text-sm font-bold tracking-wider bg-purple-900 text-purple-300">
					<SmartToyIcon className="text-white" />
				</span>
				<div className="mr-auto flex min-w-[150px] max-w-[70%] flex-col gap-2 rounded-r-md rounded-tl-md p-4 md:max-w-[60%] bg-purple-900 text-purple-300">
					<span className="font-semibold text-white">Chatbot</span>
					<div
						className="text-sm text-white"
						dangerouslySetInnerHTML={{ __html: botResponse }}></div>
					<span className="ml-auto text-xs text-white">{timeSent}</span>
				</div>
			</div>

			{selectedVideo && (
				<video
					className="ml-12 mt-2 rounded-lg h-72 w-96"
					controls>
					<source
						src={selectedVideo}
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			)}
		</>
	);
}

export default Receiver;
