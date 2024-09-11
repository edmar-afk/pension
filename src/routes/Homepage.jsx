import ChatBotDrawer from "../components/ChatBotDrawer";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Homepage() {
	return (
		<>
			<Navbar/>
			<Hero />
			<Features />
			<ChatBotDrawer/>
		</>
	);
}

export default Homepage;
