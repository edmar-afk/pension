import Footer from "../components/Footer";
import ChatBotDrawer from "../components/ChatBotDrawer";
import Cta from "../components/Cta";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Fab from "../components/Fab";
function Homepage() {
	return (
		<>
			<Navbar/>
			<Hero />
			<Features />
			<ChatBotDrawer />
			<Cta />
			<Footer />
			<Fab/>
		</>
	);
}

export default Homepage;
