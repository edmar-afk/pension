import Footer from "../components/chatbot/Footer";
import ChatBotDrawer from "../components/ChatBotDrawer";
import Cta from "../components/Cta";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Homepage() {
	return (
		<>
			<Navbar/>
			<Hero />
			<Features />
			<ChatBotDrawer />
			<Cta />
			<Footer/>
		</>
	);
}

export default Homepage;
