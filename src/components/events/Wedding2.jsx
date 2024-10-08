/* eslint-disable react/no-unescaped-entities */import img1 from "../../assets/img/events/wedding2/1.jpg";import img2 from "../../assets/img/events/wedding2/2.jpg";import img3 from "../../assets/img/events/wedding2/3.jpg";import img4 from "../../assets/img/events/wedding2/4.jpg";
import img5 from "../../assets/img/events/wedding2/5.jpg";
function Wedding2() {
	return (
		<>
			<div className="p-2 sm:p-24">
				<p className="font-bold font-cursive text-2xl sm:text-5xl mt-24 mb-14 sm:mb-24">
					Capture the magic of your special day with us
				</p>
				<div className="carousel w-full">
					{" "}
					<div
						id="slide1"
						className="carousel-item relative w-full">
						<img
							src={img5}
							className="w-full mx-auto"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide4"
								className="btn btn-circle">
								Prev
							</a>
							<a
								href="#slide2"
								className="btn btn-circle">
								Next
							</a>
						</div>
					</div>
					<div
						id="slide2"
						className="carousel-item relative w-full">
						<img
							src={img4}
							className="w-full"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide1"
								className="btn btn-circle">
								❮
							</a>
							<a
								href="#slide3"
								className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div
						id="slide3"
						className="carousel-item relative w-full">
						<img
							src={img3}
							className="w-full"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide2"
								className="btn btn-circle">
								❮
							</a>
							<a
								href="#slide4"
								className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
				</div>
				<p className="text-2xl sm:text-4xl mt-4 font-bold font-cursive">
					At Bryne's 888 pension house and function hall
				</p>
				<p className="text-gray-800 text-lg sm:text-xl my-4">
					we believe your dream wedding starts here, where every love story becomes a fairy tale. Let us turn your
					vision into reality as we create unforgettable moments, ensuring your celebration is as unique as your love.
					From breathtaking venues to personalized services, we’ve got you covered from "Yes" to "I Do." Experience
					stress-free planning and exceptional attention to detail, and say "I Do" to the wedding you’ve always
					imagined. Book your dream wedding today, and let the journey to your happily ever after begin!
				</p>
			</div>
		</>
	);
}

export default Wedding2;
