import WifiIcon from "@mui/icons-material/Wifi";import BedOutlinedIcon from "@mui/icons-material/BedOutlined";import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import CribOutlinedIcon from "@mui/icons-material/CribOutlined";
import img1 from "../assets/img/room3/1.jpg";
import img2 from "../assets/img/room3/2.jpg";
import img3 from "../assets/img/room3/3.jpg";
import img4 from "../assets/img/room3/4.jpg";
import img5 from "../assets/img/room4/5.jpg";
import img6 from "../assets/img/room4/6.jpg";
import img7 from "../assets/img/room4/7.jpg";
const questions = [
	{ id: 1, question: "When do you open?" },
	{ id: 2, question: "Hi?" },
	{ id: 3, question: "Good Morning" },
	{ id: 4, question: "I need help of something?" },
	{ id: 5, question: "Can you help me?" },
	{ id: 6, question: "Bye" },
	{ id: 7, question: "Cool" },
	{ id: 8, question: "Ok" },
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
	{ id: 1, img: img1, section: "Room 3", name: "Entrance" },
	{ id: 2, img: img2, section: "Room 3", name: "Bed" },
	{ id: 3, img: img3, section: "Room 3", name: "C.R." },
	{ id: 4, img: img4, section: "Room 3", name: "Inside" },

	{ id: 5, img: img5, section: "Room 4", name: "Bed" },
	{ id: 6, img: img6, section: "Room 4", name: "Inside" },
	{ id: 7, img: img7, section: "Room 4", name: "Outside" },

];

export { questions, features, gallery };
