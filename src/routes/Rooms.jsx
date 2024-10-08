import Footer from "../components/Footer";
import Fab from "../components/Fab";import ImageLists from "../components/gallery/ImageLists";
import NavBar from "../components/Navbar";
function Rooms() {
	return (
		<>
			<NavBar />
			<div className="bg-white w-full">
				<ImageLists />
			</div>
			<Fab />
      <Footer/>
		</>
	);
}

export default Rooms;
