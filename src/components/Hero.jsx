/* eslint-disable react/no-unescaped-entities */
function Hero() {
	return (
		<>
			<section className="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover bg-fixed">
				<div className="mx-auto relative text-center">
					<div className="px-4">
						<div className="border p-1 w-60 mx-auto rounded-full mb-4 bg-purple-600"></div>
						<h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
							Welcome to
							<span className="text-purple-600"> Bryne's 888 Pension House</span>
						</h1>
						<p className="max-w-sm mx-auto text-center text-xl font-normal leading-7 text-gray-800 mb-9">
							Smart Chatbot in Action Transforming customer services
						</p>
						<a
							href="#"
							className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-purple-600 shadow-xs hover:bg-purple-700 transition-all duration-500">
							Confused? Seek help to our chatbot now
							<svg
								className="ml-2"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</div>
					<div className="w-full -mt-32 shadow-2xl hidden sm:block">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1440 320">
							<path
								fill="#7338A0"
								fillOpacity="1"
								d="M0,192L48,165.3C96,139,192,85,288,101.3C384,117,480,203,576,229.3C672,256,768,224,864,202.7C960,181,1056,171,1152,186.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
						</svg>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
