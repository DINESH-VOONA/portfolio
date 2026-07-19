import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Skills", link: "#skills" },
  { id: 4, title: "Projects", link: "#projects" },
  { id: 5, title: "Experience", link: "#experience" },
  { id: 6, title: "Achievements", link: "#achievements" },
  { id: 7, title: "Contact", link: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full transition-all duration-300"
      style={{ backgroundColor: scrolled ? "rgb(14, 13, 13)" : "transparent" }}
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[80px] items-center justify-between">
          <div className="cursor-pointer select-none">
            <h1 className="text-[24px] font-black leading-none sm:text-[28px] lg:text-[32px]">
              <span className="text-white">Voona</span>
              <span className="text-red-500"> Dinesh</span>
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-red-500 hover:text-red-500 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="relative text-[15px] font-medium text-gray-300 transition-all duration-300 hover:text-red-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-5 sm:flex">
            <a
              href="#contact"
              className="ml-3 rounded-full bg-[rgb(250,66,62)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgb(250,66,62)/25] transition-all duration-300 hover:scale-105 hover:bg-[rgb(192,52,48)] hover:shadow-[rgb(192,52,48)/40]"
            >
              Hire Me
            </a>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#080808]/95 px-4 py-4 backdrop-blur md:hidden">
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-red-500"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;