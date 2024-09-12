/* eslint-disable react/no-unescaped-entities */import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cta from "../assets/img/cta.jpg";

function Cta() {
	const { ref, inView } = useInView({
		triggerOnce: true, // Trigger animation only once
		threshold: 0.1, // Trigger when 10% of the component is in view
	});

	const animation = {
		hidden: { opacity: 0, x: -100 }, // Starting position off-screen to the left
		visible: { opacity: 1, x: 0 }, // End position in the normal place
	};

	return (
		<section className="py-14 pt-24 bg-white">
			<div className="max-w-screen-xl mx-auto md:px-8">
				<div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
					{/* Image section */}
					<motion.div
						className="flex-1 sm:hidden lg:block"
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={animation}
						transition={{ duration: 1 }} // Adjust duration as needed
						ref={ref}>
						<img
							src={cta}
							className="md:max-w-lg sm:rounded-lg shadow-2xl"
							alt="Pension House"
						/>
					</motion.div>

					{/* Text content section */}
					<motion.div
						className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl"
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={animation}
						transition={{ duration: 1 }} // Adjust duration as needed
						ref={ref}>
						<h3 className="text-indigo-600 font-semibold">Front View of -</h3>
						<p className="text-gray-800 text-3xl font-semibold sm:text-4xl">Bryne's 888 Pension House</p>
						<p className="mt-3 text-gray-600">
							It is with great pleasure that I introduce you to a haven of comfort and relaxation, where every guest is
							treated like family. Welcome to Bryne's 888 Pension House. At Bryne's 888, we believe that a stay should
							be more than just a visit—it should be an experience. <br /> <br /> Nestled in a serene location, our
							pension house combines the charm of home with the luxury of exceptional service. From the moment you step
							through our doors, you'll be greeted with warmth and hospitality that reflects our commitment to making
							your stay as enjoyable as possible. Our rooms are thoughtfully designed to provide the perfect blend of
							comfort and elegance, ensuring that every night spent with us is restful and rejuvenating. <br />
							<br /> What sets Bryne's 888 apart is not just our inviting atmosphere, but our dedication to personalized
							care. Whether you are here for a brief getaway or an extended stay, our attentive staff is always ready to
							assist with your needs, offering local insights, arranging transportation, or simply ensuring that every
							aspect of your visit exceeds your expectations.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default Cta;
