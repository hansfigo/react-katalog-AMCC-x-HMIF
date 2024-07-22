import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);  

  return (
    <nav className="py-5 px-16 fixed top-0 z-50 w-full bg-orange-900">
      <div className="flex items-center justify-between">        
        <p className="font-extrabold text-white text-2xl">CatalogSphere</p>

        <GiHamburgerMenu onClick={() => setOpen(!isOpen)} className="block text-white size-10 rounded-full p-2 cursor-pointer hover:bg-orange-700 md:hidden"/>
        
        <ul className="hidden md:flex gap-x-8 text-white font-bold">
          <li>
            <Link to="/" className="underline-offset-4 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="underline-offset-4 hover:underline">
              About Us
            </Link>
          </li>
        </ul>        

        
      </div>
      {

        isOpen && 
        (
          <ul className="flex pt-6 gap-y-4 md:hidden flex-col gap-x-8 text-white font-bold">
            <li>
              <Link to="/" className="underline-offset-4 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="underline-offset-4 hover:underline">
                About Us
              </Link>
            </li>
          </ul>    
        )
      }          
    </nav>
  );
}
