/* eslint-disable react/prop-types *//* eslint-disable react/no-unescaped-entities */
import CancelIcon from "@mui/icons-material/Cancel";
function Header({ setIsOpen }) {
	return (
		<>
			<div className="fixed top-0 border-b-2 w-[320px] sm:w-[670px] flex flex-row p-4 sm:p-6 shadow-lg bg-white/20 backdrop-blur-2xl">
				<p className="text-xl font-bold">Bryne's Assistant</p>
				<CancelIcon
					fontSize="medium"
					className="cursor-pointer ml-auto text-red-700" // Optional: Add spacing and cursor pointer
					onClick={() => setIsOpen(false)} // Close the drawer when clicked
				/>
			</div>
		</>
	);
}

export default Header;
