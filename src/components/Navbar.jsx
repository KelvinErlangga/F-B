"use client"; // This makes the component a client component

export default function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center">
        <ul className="flex items-center space-x-8 text-black font-semibold mx-auto">
          <li className="ml-0">
            <a href="">
              <img src="logo.png" alt="Richeese Factory Logo" className="h-16 inline" />
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("our-menu")} className="cursor-pointer relative group">
              OUR MENU
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("promo")} className="cursor-pointer relative group">
              PROMO
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("special-event")} className="cursor-pointer relative group">
              SPECIAL EVENT
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("follow-us")} className="cursor-pointer relative group">
              FOLLOW US
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("discover")} className="cursor-pointer relative group">
              DISCOVER
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("location")} className="cursor-pointer relative group">
              LOCATION
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
