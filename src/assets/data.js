import WifiIcon from "@mui/icons-material/Wifi";import BedOutlinedIcon from "@mui/icons-material/BedOutlined";import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";import CribOutlinedIcon from "@mui/icons-material/CribOutlined";import img1 from "../assets/img/room3/1.jpg";import img2 from "../assets/img/room3/2.jpg";import img3 from "../assets/img/room3/3.jpg";import img4 from "../assets/img/room3/4.jpg";import img5 from "../assets/img/room4/5.jpg";import img6 from "../assets/img/room4/6.jpg";import img7 from "../assets/img/room4/7.jpg";import img8 from "../assets/img/room1/1.jpg";import img9 from "../assets/img/room1/2.jpg";import img10 from "../assets/img/room1/3.jpg";import img11 from "../assets/img/room2/1.jpg";import img12 from "../assets/img/room2/2.jpg";import img13 from "../assets/img/room2/3.jpg";import img14 from "../assets/img/room2/4.jpg";import img15 from "../assets/img/room2/5.jpg";import img16 from "../assets/img/room2/6.jpg";import img17 from "../assets/img/room2/7.jpg";import img18 from "../assets/img/room5/1.jpg";import img19 from "../assets/img/room5/2.jpg";import img21 from "../assets/img/room6/1.jpg";import img22 from "../assets/img/room6/2.jpg";const questions = [
	{
		id: 1,
		question: "Do you offer rooms with special amenities like a balcony or kitchenette?",
	},
	{ id: 2, question: "What attractions or restaurants are near the pension house?" },
	{ id: 3, question: "Do you offer room service, and what are the available hours?" },
	{ id: 4, question: "Do you have elevators or ramps for wheelchair access?" },
	{ id: 5, question: "What are your room rates?" },
	{
		id: 6,
		question:
			"Do you provide audio-visual equipment, such as projectors, microphones, and speakers in your function hall?",
	},
	{ id: 7, question: "Do you offer event packages for weddings, birthdays, or corporate meetings?" },
	{ id: 8, question: "What are the overtime fees if the event exceeds the allotted time?" },
	{ id: 9, question: "Can we bring our own caterer, and are there additional fees for that?" },
	{ id: 10, question: "Can I request extra beds or a sofa bed for additional guests?" },
	{ id: 11, question: "How much if we want to hold a wedding party in your function hall?" },
	{ id: 12, question: "Who is responsible for cleaning and restoring the function hall after the event?" },
	{ id: 13, question: "Are there restrictions on serving alcohol during events?" },
	{ id: 14, question: "Can I book your facility for a special event ?" },
	{ id: 15, question: "What is the maximum capacity of the function hall?" },
	{ id: 16, question: "Is there enough parking space for guests attending events?" },
	{ id: 17, question: "Do you cater food for rooms?" },
	{ id: 18, question: "Do you have 24-hour security or CCTV monitoring?" },
	{ id: 19, question: "What payment methods do you accept?" },
	{ id: 20, question: "How can I book a room?" },
	{ id: 21, question: "What are your check-in and check-out times?" },
	{ id: 22, question: "What is your cancellation policy?" },
	{ id: 23, question: "Do you offer laundry or dry cleaning service?" },
	{ id: 24, question: "What is your policy on visitors?" },
	{ id: 25, question: "Do the rooms have a desk or workspace?" },
	{ id: 26, question: "Do you offer weekly stays in your rooms?" },
	{ id: 27, question: "Room 1 family size" },
	{ id: 28, question: "Room 2 Standard" },
	{ id: 29, question: "Room 3 Standard" },
	{ id: 30, question: "Room 4 Deluxe (Twinbed)" },
	{ id: 31, question: "Room 5 Deluxe" },
	{ id: 32, question: "Room 6 Non Aircon" },
	{ id: 33, question: "Do you offer free WiFi?" },
	{ id: 34, question: "Is breakfast included in the room rates?" },
	{ id: 35, question: "What are your check-in and check-out times?" },
	{ id: 36, question: "Do you offer late check-out options?" },
	{ id: 37, question: "How can I book a room?" },
	{ id: 38, question: "What is your cancellation policy?" },
	{ id: 39, question: "What payment methods do you accept?" },
	{ id: 40, question: "Do you require a deposit for reservations?" },
	{ id: 41, question: "What attractions or restaurants are near the pension house?" },
	{ id: 42, question: "Do you offer rooms with special amenities like a balcony or kitchenette?" },
	{ id: 43, question: "Is the area around the pension house safe?" },
	{ id: 44, question: "Do you have 24-hour security or CCTV monitoring?" },
	{ id: 45, question: "How often is housekeeping service provided?" },
	{ id: 46, question: "Do you offer room service, and what are the available hours?" },
	{ id: 47, question: "Do you offer laundry or dry cleaning service?" },
	{ id: 48, question: "Is there a self-service laundry facility on-site?" },
	{ id: 49, question: "Are pets allowed in the pension house?" },
	{ id: 50, question: "Do you have family rooms?" },
	{ id: 51, question: "Do you provide cribs or high chairs for young children?" },
	{ id: 52, question: "Can I book your facility for a special event or meeting?" },
	{ id: 53, question: "Do you have elevators or ramps for wheelchair access?" },
	{ id: 54, question: "Do you offer discounts for extended stays or group bookings?" },
	{ id: 55, question: "Do you have smoking or non-smoking rooms?" },
	{ id: 56, question: "Do the rooms have air conditioning and TV?" },
	{ id: 57, question: "Is there a private bathroom in each room?" },
	{ id: 58, question: "Are there nearby dining options that you recommend?" },
	{ id: 59, question: "What is your policy on visitors?" },
	{ id: 60, question: "Do the rooms have hot and cold water?" },
	{ id: 61, question: "Do you offer honeymoon or romantic getaway packages?" },
	{ id: 62, question: "What is the maximum capacity of the function hall?" },
	{ id: 63, question: "Do you provide seating arrangements for events, such as round tables and chairs?" },
	{
		id: 64,
		question:
			"Do you provide audio-visual equipment, such as projectors, microphones, and speakers in your function hall?",
	},
	{ id: 65, question: "Is there a sound system available for use?" },
	{ id: 66, question: "Do you offer event packages for weddings, birthdays, or corporate meetings?" },
	{ id: 67, question: "Can we bring our own caterer, and are there additional fees for that?" },
	{ id: 68, question: "Can we bring our own decorations?" },
	{ id: 69, question: "What time is the function hall available for event setup?" },
	{ id: 70, question: "How far in advance should I book the function hall?" },
	{ id: 71, question: "What is the payment schedule for function hall rentals?" },
	{ id: 72, question: "Is there enough parking space for guests attending events?" },
	{ id: 73, question: "What are the overtime fees if the event exceeds the allotted time?" },
	{ id: 74, question: "Are there restrictions on serving alcohol during events?" },
	{ id: 75, question: "Who is responsible for cleaning and restoring the function hall after the event?" },
	{ id: 76, question: "Can I request extra beds or a sofa bed for additional guests?" },
	{ id: 77, question: "Is there a TV in each room?" },
	{ id: 78, question: "Do the rooms have a desk or workspace?" },
	{ id: 79, question: "Can you suggest where we can book a food package?" },
	{ id: 80, question: "Do you have a room for 1 person?" },
	{ id: 81, question: "How many rooms for 1 person?" },
	{ id: 82, question: "What room is suitable for a family?" },
	{ id: 83, question: "Do you have a room with 2 beds?" },
	{ id: 84, question: "Do you cater food for rooms?" },
	{ id: 85, question: "How much if we want to hold a birthday party in your function hall?" },
	{ id: 86, question: "How much if we want to hold a wedding party in your function hall?" },
	{ id: 87, question: "Do you offer weekly stays in your rooms?" },
	{ id: 88, question: "How many rooms are in your pension house?" },
	{ id: 89, question: "What amenities are included in the rooms?" },
	{ id: 90, question: "Do you have any special offers or packages?" },
	{ id: 91, question: "What is included in the family room rate?" },
	{ id: 92, question: "Is there a TV in each room?" },
];

const support = [
	{
		id: 1,
		trigger:
			"Our room rates vary based on the type of room. For our standard rooms, the rates are Php 650 for 12 hours and Php 950 for 24 hours. For larger family-sized rooms, the rate is Php 850 for 12 hours and Php 1,500 for 24 hours, and the non-aircon rate is Php 500 for 24 hours and Php 350 for 12 hours.",
		questions: [
			{
				id: 1,
				question: "How can I book a room?",
			},
			{
				id: 2,
				question: "Is breakfast included in the room rates?",
			},
			{
				id: 3,
				question: "Room Categories & Detailed Descriptions?",
			},
		],
	},
	{
		id: 2,
		trigger: "Yes, our facility is available for special events.",
		questions: [
			{
				id: 1,
				question: "How much is your Function Hall Rental?",
			},
			{
				id: 2,
				question: "Are there restrictions on serving alcohol during events?",
			},
			{
				id: 3,
				question: "What is the payment schedule for function hall rentals?",
			},
		],
	},
	{
		id: 3,
		trigger: "Our function hall can accommodate between 200 to 300 guests.",
		questions: [
			{
				id: 1,
				question: "Can we increase the capacity by adding extra chairs or tables?",
			},
			{
				id: 2,
				question: "How many guests can be seated at each table?",
			},
		],
	},
	{
		id: 4,
		trigger: "Yes, we have ample parking space available for guests.",
		questions: [
			{
				id: 1,
				question: "Is there a fee for parking?",
			},
			{
				id: 2,
				question: "Is parking secure?",
			},
		],
	},
	{
		id: 5,
		trigger: "Yes, catering options can be arranged based on customer preferences.",
		questions: [
			{
				id: 1,
				question: "Can you suggest where we can book a food package?",
			},
			{
				id: 2,
				question: "What attractions or restaurants are near the pension house?",
			},
		],
	},
	{
		id: 6,
		trigger: "Default FAQs",
		questions: [
			{
				id: 1,
				question: "Do you have 24-hour security or CCTV monitoring?",
			},
			{
				id: 2,
				question: "What payment methods do you accept?",
			},
			{
				id: 3,
				question: "How can I book a room?",
			},
			{
				id: 4,
				question: "What are your check-in and check-out times?",
			},
			{
				id: 5,
				question: "What is your cancellation policy?",
			},
			{
				id: 6,
				question: "Do you offer laundry or dry cleaning service?",
			},
			{
				id: 7,
				question: "What is your policy on visitors?",
			},
			{
				id: 8,
				question: "Do the rooms have a desk or workspace?",
			},
			{
				id: 9,
				question: "Do you offer weekly stays in your rooms?",
			},
		],
	},
	{
		id: 7,
		trigger:
			"Our room rates vary based on the type of room. For our standard rooms, the rates are Php.650 for 12 hours and Php.950 for 24 hours. For larger family-sized rooms, the rate is Php.850 for 12 hours and Php.1,500 for 24 hours. For deluxe the rates are 750 for 12 hours and 1,200 for 24 hours. For the Deluxe or twin bed the rates are 1,000 for 12 hours and 1,800 for 24 hours and the Non-aircon 500 for 24hours and 350 for 12hours",
		questions: [
			{
				id: 1,
				question: "Can you show me standard room that rates 650 for 12 hours and 950 for 24 hours?",
			},
			{
				id: 2,
				question: "Can you show me larger family-sized room that rates 850 for 12 hours and 1,500  for 24 hours?",
			},
			{
				id: 3,
				question: "Can you show me Deluxe or twin bed that rates are 1,000 for 12 hours and 1,800 for 24 hours?",
			},
			{
				id: 4,
				question: "Can you show me Deluxe that rates 750 for 12 hours and 1,200 for 24 hours?",
			},
			{
				id: 5,
				question: "How can I book a room?",
			},
			{
				id: 6,
				question: "Is breakfast included in the room rates?",
			},
		],
	},
	{
		id: 8,
		trigger: "Yes, our facility is available for special events.",
		questions: [
			{
				id: 1,
				question: "How much is your Function Hall Rental?",
			},
			{
				id: 2,
				question: "Are there restrictions on serving alcohol during events?",
			},
			{
				id: 3,
				question: "What is the payment schedule for function hall rentals?",
			},
			{
				id: 4,
				question: "Can you show me Deluxe that rates 750 for 12 hours and 1,200 for 24 hours?",
			},
			{
				id: 5,
				question: "How can I book a room?",
			},
			{
				id: 6,
				question: "Is breakfast included in the room rates?",
			},
		],
	},
	{
		id: 9,
		trigger: "Our function hall can accommodate between 200 to 300 guests.",
		questions: [
			{
				id: 1,
				question: "Can we increase the capacity by adding extra chairs or tables?",
			},
			{
				id: 2,
				question: "How many guests can be seated at each table?",
			},
		],
	},
	{
		id: 10,
		trigger: "Yes, we have ample parking space available for guests.",
		questions: [
			{
				id: 1,
				question: "Is there a fee for parking?",
			},
			{
				id: 2,
				question: "Is parking secure?",
			},
		],
	},
	{
		id: 11,
		trigger: "Yes, catering options can be arranged based on customer preferences.",
		questions: [
			{
				id: 1,
				question: "Can you suggest where we can book a food package?",
			},
			{
				id: 2,
				question: "What attractions or restaurants are near the pension house?",
			},
		],
	},
];

const features = [
	{
		id: 1,
		feature: "Double Size Bed",
		details: "A spacious and comfortable double bed designed to provide a restful and relaxing sleep experience",
		icon: BedOutlinedIcon,
	},
	{
		id: 2,
		feature: "SMART TV",
		details:
			"A user-friendly smart TV offering a variety of entertainment options, including streaming your favorite shows and movies.",
		icon: LiveTvOutlinedIcon,
	},
	{
		id: 3,
		feature: "Free WIFI",
		details:
			"Enjoy seamless internet access with free high-speed WiFi, perfect for staying in touch with family and friends.",
		icon: WifiIcon,
	},
	{
		id: 4,
		feature: "Split-Type Aircon",
		details:
			"A quiet and energy-efficient air conditioning system that ensures a comfortable room temperature, day and night",
		icon: AcUnitOutlinedIcon,
	},
	{
		id: 5,
		feature: "Private Bathroom (Own C.R)",
		details: "Your own private bathroom for added convenience and privacy, ensuring a comfortable stay.",
		icon: CribOutlinedIcon,
	},
];

const gallery = [
	{ id: 8, img: img8, section: "Room 1", name: "Inside" },
	{ id: 9, img: img9, section: "Room 1", name: "Bed" },
	{ id: 10, img: img10, section: "Room 1", name: "Bed" },

	{ id: 11, img: img11, section: "Room 2", name: "Inside" },
	{ id: 12, img: img12, section: "Room 2", name: "Bed" },
	{ id: 13, img: img13, section: "Room 2", name: "Bed" },
	{ id: 14, img: img14, section: "Room 2", name: "Bed" },
	{ id: 15, img: img15, section: "Room 2", name: "Bed" },
	{ id: 16, img: img16, section: "Room 2", name: "Bed" },
	{ id: 17, img: img17, section: "Room 2", name: "Bed" },

	{ id: 1, img: img1, section: "Room 3", name: "Entrance" },
	{ id: 2, img: img2, section: "Room 3", name: "Bed" },
	{ id: 3, img: img3, section: "Room 3", name: "C.R." },
	{ id: 4, img: img4, section: "Room 3", name: "Inside" },

	{ id: 5, img: img5, section: "Room 4", name: "Bed" },
	{ id: 6, img: img6, section: "Room 4", name: "Inside" },
	{ id: 7, img: img7, section: "Room 4", name: "Outside" },

	{ id: 18, img: img18, section: "Room 5", name: "Inside" },
	{ id: 19, img: img19, section: "Room 5", name: "Outside" },

	{ id: 20, img: img21, section: "Room 6", name: "Inside" },
	{ id: 21, img: img22, section: "Room 6", name: "Outside" },
];

export { questions, features, gallery, support };
