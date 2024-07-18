import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-between">
                <li>
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                </li>
                <li>
                    <Link to="/about-us" className="hover:text-gray-400">About Us</Link>
                </li>
            </ul>
        </nav>
    )
}
