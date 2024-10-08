/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { gallery } from "../../assets/data";

function ImageLists() {
	const room1Items = gallery.filter((item) => item.section === "Room 1");
	const room2Items = gallery.filter((item) => item.section === "Room 2");
	const room3Items = gallery.filter((item) => item.section === "Room 3");
	const room4Items = gallery.filter((item) => item.section === "Room 4");
	const room5Items = gallery.filter((item) => item.section === "Room 5");
	const room6Items = gallery.filter((item) => item.section === "Room 6");

	// Animation settings for sliding in from left with delay
	const slideInFromLeft = (index) => ({
		initial: { x: -100, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		transition: {
			delay: index * 0.2, // 0.2s delay for each subsequent item
			type: "spring",
			stiffness: 50,
		},
	});

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
				{room1Items.map((item, index) => (
					<motion.div
						key={item.id}
						className="w-[360px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
						{...slideInFromLeft(index)}>
						<a href="#">
							<img
								src={item.img}
								alt={`Room 1 Image ${item.id}`}
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
					</motion.div>
				))}
			</section>

			<section className="w-full py-14 px-2 sm:px-44 flex flex-row flex-wrap justify-between items-center gap-y-20 gap-x-14 mb-5">
				{room2Items.map((item, index) => (
					<motion.div
						key={item.id}
						className="w-[360px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
						{...slideInFromLeft(index)}>
						<a href="#">
							<img
								src={item.img}
								alt={`Room 2 Image ${item.id}`}
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
					</motion.div>
				))}
			</section>

			<section className="w-full py-14 px-2 sm:px-44 flex flex-row flex-wrap justify-between items-center gap-y-20 gap-x-14 mb-5">
				{room3Items.map((item, index) => (
					<motion.div
						key={item.id}
						className="w-[360px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
						{...slideInFromLeft(index)}>
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
					</motion.div>
				))}
			</section>

			<section className="w-full py-14 px-2 sm:px-44 flex flex-row flex-wrap justify-between items-center gap-y-20 gap-x-14 mb-5">
				{room4Items.map((item, index) => (
					<motion.div
						key={item.id}
						className="w-[360px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
						{...slideInFromLeft(index)}>
						<a href="#">
							<img
								src={item.img}
								alt={`Room 4 Image ${item.id}`}
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
					</motion.div>
				))}
			</section>

			<section className="w-full py-14 px-2 sm:px-44 flex flex-row flex-wrap justify-evenly items-center gap-y-20 gap-x-14 mb-5">
				{room5Items.map((item, index) => (
					<motion.div
						key={item.id}
						className="w-[360px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
						{...slideInFromLeft(index)}>
						<a href="#">
							<img
								src={item.img}
								alt={`Room 5 Image ${item.id}`}
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
					</motion.div>
				))}
			</section>

			<section className="w-full py-14 px-2 sm:px-44 flex flex-row flex-wrap justify-evenly items-center gap-y-20 gap-x-14 mb-5">
				{room6Items.map((item, index) => (
					<motion.div
						key={item.id}
						className="w-[360px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
						{...slideInFromLeft(index)}>
						<a href="#">
							<img
								src={item.img}
								alt={`Room 6 Image ${item.id}`}
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
					</motion.div>
				))}
			</section>
		</>
	);
}

export default ImageLists;
