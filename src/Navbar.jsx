import  { useState } from "react";

import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative h-[480px] md:h-[480px] overflow-hidden">
      {/* Background Video */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://www.pexels.com/download/video/3255275/" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Overlay (optional, for better text contrast) */}
      <div className="absolute inset-0 bg-black z-10"></div>

      {/* Navbar Content */}
      <nav className="relative z-20 flex items-center justify-between p-4 text-white">
        {/* Logo */}
     <div className="  rounded-lg p-4  ml-6 w-fit shadow-xl">
  <div className="text-3xl font-bold tracking-wide ">
    <Link to="/"><span className="font-bold text-yellow-600">RITZA</span><span className="font-bold text-yellow-700">MEDIDA</span><span className="font-light text-yellow-800">WORLD</span>   </Link>
  </div>
</div>






        {/* Hamburger button - shown on mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static left-0 w-full md:w-auto bg-violet-900 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "top-1" : "top-[-500px]"
          }`}
        >
          <Link to="/" className="text-2xl block py-2 md:py-0">
            Service
          </Link>
          <Link to="/shop" className="text-2xl block py-2 md:py-0">
            Our Work
          </Link>
 
          <Link to="/blog" className="text-2xl block py-2 md:py-0">
            Service
          </Link>
          
        
        
          <Link to="/contact" className="text-2xl block py-2 md:py-0">
            Contanct
          </Link>
                  <Link to="" className="text-2xl block py-2 md:py-0 bg-yellow-800 p-8 rounded">
        <div className="flex p-2"> Free Consulation </div>
          </Link>
           <Link to="/contact" className="text-2xl block py-2 md:py-0">
           ☰
          </Link>
 
        </div>
      </nav>


<div className="relative z-20 flex mt-36 h-[calc(100%-60px)] mb-2 ">
  <div className=" rounded-2xl p-8 md:p-12">
    <h1 className="text-3xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-white">
      Where Idea Becomes{" "}<br></br>
      <span className="text-white">Digital Succes</span>
    </h1>
    <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto text-gray-200 leading-relaxed">
      We cteaft real storie of  turn brand into lagend
    </p>

      </div>
</div>
    </header>
  );
}

export default Navbar;
