/* eslint-disable react/prop-types */ import { motion } from "framer-motion";
import questions from "../../assets/data";

function Choices({ animate }) {
	return (
		<motion.div
			className="flex flex-row justify-evenly flex-wrap mt-28"
			initial="hidden"
			animate={animate ? "visible" : "hidden"} // Trigger based on animate prop
			variants={{
				visible: {
					transition: {
						staggerChildren: 0.1, // Stagger delay for each child
					},
				},
				hidden: {
					transition: {
						staggerChildren: 0.1,
					},
				},
			}}>
			{questions.map((question, index) => (
				<motion.p
					key={question.id}
					className="bg-purple-700 mb-6 text-white py-6 px-4 rounded-xl w-[150px] text-center flex items-center justify-center shadow-2xl"
					initial={{ x: -100, opacity: 0 }} // Start off-screen slightly to the left
					animate={{
						x: animate ? 0 : -100, // Move to the original position when animating
						opacity: animate ? 1 : 0, // Fade in when animating
					}}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 20,
						delay: animate ? index * 0.1 : 0, // Apply delay only when animating
					}}>
					{question.question}
				</motion.p>
			))}
		</motion.div>
	);
}

export default Choices;
