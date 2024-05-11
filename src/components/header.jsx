import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-gray-900 text-white">
      <a href="/" className="logo text-2xl font-bolf">
        Rakesh
      </a>

      {/*Desktop Nav*/}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/*Mobile */}

      <nav
        className={
          !toggle
            ? "block md:hidden fixed left-[100%] top-20 py-2 w-full h-full bg-gray-900 duration-500"
            : "block md:hidden fixed left-0 top-10 py-2 w-full h-full bg-gray-900 duration-500"
        }
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/*Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
