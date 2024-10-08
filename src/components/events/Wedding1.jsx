/* eslint-disable react/no-unescaped-entities */ import wedding1 from "../../assets/img/events/wedding1/wedding1.jpg";import wedding2 from "../../assets/img/events/wedding1/wedding2.jpg";
import wedding3 from "../../assets/img/events/wedding1/wedding3.jpg";
import wedding4 from "../../assets/img/events/wedding1/wedding4.jpg";

function Wedding1() {
	return (
		<>
			<div className="font-cursive  flex flex-col sm:flex-row items-center justify-center gap-8 w-full mx-auto p-4 px-4 md:px-64">
				<div className="w-full md:w-[630px] justify-center flex flex-wrap">
					<img
						src={wedding1}
						className="w-[150px] sm:w-72 h-fit mb-2 rounded-2xl"
					/>
					<img
						src={wedding2}
						className="w-[150px] sm:w-72 h-fit mb-2 ml-2 rounded-2xl"
					/>
					<img
						src={wedding3}
						className="w-[150px] sm:w-72 h-fit mb-2 rounded-2xl"
					/>
					<img
						src={wedding4}
						className="w-[150px] sm:w-72 h-fit mb-2 ml-2 rounded-2xl"
					/>
				</div>

				<div className="w-full sm:w-1/2">
					<h3 className="text-3xl font-extrabold text-gray-800">
						Capture the magic of your special day with us! At Bryne's 888 pension house and function hall
					</h3>
					<p className="mt-4 text-xl text-gray-800">
						we believe your dream wedding starts here, where every love story becomes a fairy tale. Let us turn your
						vision into reality as we create unforgettable moments, ensuring your celebration is as unique as your love.
						From breathtaking venues to personalized services, we’ve got you covered from "Yes" to "I Do." Experience
						stress-free planning and exceptional attention to detail, and say "I Do" to the wedding you’ve always
						imagined. Book your dream wedding today, and let the journey to your happily ever after begin!
					</p>

					<div className="mt-8 text-left">
						<h4 className="text-xl font-bold">Mr. and Mrs. Leshil Juntilla and levi Junior</h4>
						<p className="text-sm text-gray-500 mt-0.5">Wedding event at Bryne's 888</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Wedding1;
