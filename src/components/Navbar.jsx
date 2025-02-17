
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 p-2 shadow-md transition-all duration-300 ${
        isScrolled ? "bg-gray-900" : "bg-transparent md:bg-gray-900"}
      `}
    >
      <div className="container mx-auto flex justify-between items-center relative text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
  <img src="img/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
</div>

        {/* Desktop Menu (Centered) */}
        <ul className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2 font-rajdhani">
          <li><Link to="/" className="hover:text-gray-400">HOME</Link></li>
          <li><Link to="/about-us" className="hover:text-gray-400">ABOUT-US</Link></li>
          <li><Link to="/services" className="hover:text-gray-400">SERVICES</Link></li>
          <li><Link to="/shop" className="hover:text-gray-400">SHOP</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">CONTACT</Link></li>
        </ul>

        {/* Icons and Mobile Menu Button (Aligned to right) */}
        <div className="flex items-center space-x-4 md:ml-auto">
        <span className="hidden md:inline cursor-pointer">
  <img src="img/whatsapp.png" alt="Notification" className="w-6 h-6" />
</span>
<span
      className="hidden md:inline cursor-pointer"
      onClick={() => navigate("/contact")}
    >
      
      </span>
<a
  href="https://www.instagram.com/gymcity27/profilecard/?igsh=MWpoNmMzMHAzYWdrZg=="
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline cursor-pointer"
>
  <img src="img/instagram.png" alt="Instagram" className="w-6 h-6" />
</a>  <button
            className="md:hidden focus:outline-none ml-auto flex justify-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden p-5`}
      >
       <button
  className="text-white text-xl mb-5 focus:outline-none"
  onClick={() => setIsOpen(false)}
>
  <img src="img/logo.png" alt="Close" className="w-20 h-20" />
</button>

        <ul className="space-y-4 text-lg text-white ">
          <li><Link to="/" className="hover:text-gray-400">HOME</Link></li>
          <li><Link to="/about-us" className="hover:text-gray-400">ABOUT-US</Link></li>
          <li><Link to="/services" className="hover:text-gray-400">SERVICES</Link></li>
          <li><Link to="/shop" className="hover:text-gray-400">SHOP</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">CONTACT</Link></li>
        </ul>
      </div>
    </nav>
  );
}
