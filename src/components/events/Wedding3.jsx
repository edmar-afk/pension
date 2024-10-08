/* eslint-disable react/no-unescaped-entities */ import wedding1 from "../../assets/img/events/wedding3/1.jpg";import wedding2 from "../../assets/img/events/wedding3/2.jpg";import wedding3 from "../../assets/img/events/wedding3/3.jpg";
import wedding4 from "../../assets/img/events/wedding3/4.jpg";
function Wedding3() {
	return (
		<>
			<div className="font-cursive pb-44  flex flex-col sm:flex-row items-center justify-center gap-8 w-full mx-auto p-4 px-4 md:px-64">
				<div className="w-full sm:w-1/2">
					<h3 className="text-3xl font-extrabold text-gray-800">
						Turn your dream wedding into a beautiful reality at Bryne's 888 Pension House
					</h3>
					<p className="mt-4 text-xl text-gray-800">
						Our charming function hall, nestled amidst stunning surroundings, offers the ideal setting to bring your
						wedding dreams to life. Whether you're envisioning an intimate gathering or a grand celebration, the beauty
						of our venue provides a picture-perfect backdrop for every special moment. From the very first step of
						planning to the final farewell, our dedicated team is here to assist you, ensuring that every detail is
						thoughtfully curated. With a focus on love, joy, and creating unforgettable memories, we are committed to
						making your day truly magical. Say 'I do' to an extraordinary experience—book your wedding with us and let
						your happily ever after begin!
					</p>

					<div className="mt-8 text-left">
						<h4 className="text-xl font-bold">Mr. and Mrs. Joralyn T Dano and Jonathan C Japos</h4>
						<p className="text-sm text-gray-500 mt-0.5">Wedding event at Bryne's 888</p>
					</div>
				</div>
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
			</div>
		</>
	);
}

export default Wedding3;
