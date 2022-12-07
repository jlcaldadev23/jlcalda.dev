import { HiBars3, HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useState } from "react";
import Toggle from "react-toggle";
import { v4 as uuidv4 } from "uuid";

import { useMediaQuery } from "../hooks";
import "react-toggle/style.css";

// PAGES
const pages = ["About me", "Skills", "Projects", "Contact"];

// MOBILE NAVIGATION
const MobileNav = ({ isMobileNavActive, setIsMobileNavActive }) => {
  return (
    <div className="flex justify-between">
      <div className="p-2">
        <span>JL</span>
        <span>Calda</span>
        <span>.dev</span>
      </div>
      <div className="p-2 text-2xl">
        {isMobileNavActive ? (
          <div className="flex justify-between">
            <HiXMark onClick={() => setIsMobileNavActive(!isMobileNavActive)} />
          </div>
        ) : (
          <div className="flex justify-between">
            <HiBars3 onClick={() => setIsMobileNavActive(!isMobileNavActive)} />
          </div>
        )}

        {isMobileNavActive && (
          <div className="fixed right-0 bottom-0 top-[70px] w-full h-full  p-4 rounded-tl-3xl">
            <ul className="flex flex-col gap-12 w-2/3 bg-flax">
              {pages.map((page) => (
                <li
                  key={uuidv4()}
                  className="hover:font-semibold cursor-pointer"
                >
                  {page}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
// DESKTOP NAV
const DesktopNav = () => {
  return (
    <div className="grow flex justify-between">
      <div className="p-2">
        <span>JL</span>
        <span>Calda</span>
        <span>.dev</span>
      </div>
      <div className="flex gap-10">
        <ul className="flex p-2 gap-8">
          {pages.map((page) => (
            <li
              className={`px-4 py-2 text-xs ${
                page === "Contact"
                  ? "rounded-full text-white bg-dark-purple"
                  : ""
              }`}
              key={uuidv4()}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

//NAVIGATION
const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:760px)");
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  return (
    <>
      <nav className="py-4 container mx-auto">
        {isAboveMediumScreens ? (
          <DesktopNav />
        ) : (
          <MobileNav
            isMobileNavActive={isMobileNavActive}
            setIsMobileNavActive={setIsMobileNavActive}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
