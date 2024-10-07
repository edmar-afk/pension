import { motion } from "framer-motion";import { useInView } from "react-intersection-observer";
import { features } from "../assets/data.js";

function Features() {
	const [ref, inView] = useInView({
		triggerOnce: true, // Ensures the animation runs only once
		threshold: 0.2, // Trigger when 20% of the component is visible
	});

	const featureVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: (i) => ({
			scale: 1,
			opacity: 1,
			transition: {
				delay: i * 0.1,
				type: "spring",
				stiffness: 300,
				damping: 15,
			},
		}),
	};

	return (
		<div
			ref={ref}
			className="w-full bg-white mx-auto py-14 px-8 sm:px-44">
			<h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-16">
				Discover Our Exclusive Services
			</h2>
			<div className="flex flex-row justify-evenly flex-wrap gap-12">
				{features.map((feature, i) => (
					<motion.div
						className="text-center flex flex-col items-center w-96"
						key={feature.id} // Use feature.id as key
						custom={i}
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={featureVariants}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#007bff"
							className="w-8 mb-6 inline-block"
							viewBox="0 0 32 32">
							{/* SVG path or content here */}
						</svg>
						<feature.icon className="text-purple-700 mb-2" />
						<h3 className="text-gray-800 text-xl font-semibold mb-3">{feature.feature}</h3>
						<p className="text-gray-600 text-sm">{feature.details}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
}

export default Features;
