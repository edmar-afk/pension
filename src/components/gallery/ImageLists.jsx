/* eslint-disable react/no-unescaped-entities */ import CheckCircleIcon from "@mui/icons-material/CheckCircle";import { gallery } from "../../assets/data";
function ImageLists() {
	const room3Items = gallery.filter((item) => item.section === "Room 3");
	const room4Items = gallery.filter((item) => item.section === "Room 4");

	return (
		<>
			<div className="text-center pt-24 mx-3 sm:mx-96">
				<h1 className="font-bold text-3xl mb-4">
					Discover the Allure of Bryne's 888 Pension House: A Haven of Comfort and Hospitality
				</h1>
				<h1 className="text-lg italic">
					Embark on a Visual Journey Through Our Elegant Spaces, Cozy Accommodations, and Serene Surroundings,
					Showcasing the Perfect Blend of Relaxation.
				</h1>
			</div>

			<section className="w-full py-14 px-2 sm:px-44 flex flex-row flex-wrap justify-between items-center gap-y-20 gap-x-14 mb-5">
				{room3Items.map((item) => (
					<div
						key={item.id}
						className="w-[360px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
						<a href="#">
							<img
								src={item.img}
								alt={`Room 3 Image ${item.id}`}
								className="h-80 w-[370px] object-cover rounded-t-xl"
							/>
							<div className="px-4 py-3 w-[370px]">
								<span className="text-gray-400 mr-3 uppercase text-xs">Bryne's 888 Pension House</span>
								<p className="text-lg font-bold text-black truncate block capitalize">
									{item.section} - {item.name}
								</p>
								<div className="flex items-center">
									<div className="ml-auto">
										<CheckCircleIcon
											fontSize="large"
											className="text-green-700"
										/>
									</div>
								</div>
							</div>
						</a>
					</div>
				))}
			</section>

			<section className="w-full py-14 px-2 sm:px-44 flex flex-row flex-wrap justify-between items-center gap-y-20 gap-x-14">
				{room4Items.map((item) => (
					<div
						key={item.id}
						className="w-[360px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
						<a href="#">
							<img
								src={item.img}
								alt={`Room 3 Image ${item.id}`}
								className="h-80 w-[370px] object-cover rounded-t-xl"
							/>
							<div className="px-4 py-3 w-[370px]">
								<span className="text-gray-400 mr-3 uppercase text-xs">Bryne's 888 Pension House</span>
								<p className="text-lg font-bold text-black truncate block capitalize">
									{item.section} - {item.name}
								</p>
								<div className="flex items-center">
									<div className="ml-auto">
										<CheckCircleIcon
											fontSize="large"
											className="text-green-700"
										/>
									</div>
								</div>
							</div>
						</a>
					</div>
				))}
			</section>
		</>
	);
}

export default ImageLists;
