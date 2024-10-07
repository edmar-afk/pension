import top from "../../assets/img/events/top.jpg";import bot from "../../assets/img/events/bot.jpg";import Wedding1 from "./Wedding1";
function Body() {
	return (
		<>
			<img
				src={bot}
				alt=""
				className="sm:-mt-96"
			/>{" "}
			<div className="my-24">
				<p className="uppercase font-cursive text-2xl sm:text-4xl italic text-center">discover exclusive service</p>
			</div>
			<Wedding1 />
			
		</>
	);
}

export default Body;
