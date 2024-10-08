import Body from "../components/events/Body";
import Fab from "../components/Fab";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";


function Events() {
	return (
		<>
			<NavBar />
			<div className="bg-white w-full">
				<Body/>
			</div>
			<Fab />
			<Footer/>
		</>
	);
}

export default Events;
