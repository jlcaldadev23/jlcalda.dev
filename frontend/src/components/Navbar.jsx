import { HiBars3, HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useState } from "react";
import Toggle from "react-toggle";
import { v4 as uuidv4 } from "uuid";

import { useMediaQuery } from "../hooks";
import "react-toggle/style.css";

// PAGES
const pages = ["Home", "Skills", "Projects", "Contact"];

// MOBILE NAVIGATION
const MobileNav = ({
  darkTheme,
  setDarkTheme,
  isMobileNavActive,
  setIsMobileNavActive,
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex p-2 items-end justify-center">
        <Toggle
          defaultChecked={darkTheme}
          icons={false}
          onChange={() => setDarkTheme(!darkTheme)}
        />
      </div>
      <div className="p-2 text-3xl">
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
          <ul className="fixed left-[110px] flex flex-col">
            {pages.map((page) => (
              <li key={uuidv4()} className="">
                {page}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
// DESKTOP NAV
const DesktopNav = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="flex justify-between">
      <div className="p-2">JL</div>
      <div className="flex">
        <ul className="flex p-2 gap-16">
          {pages.map((page) => (
            <li className="" key={uuidv4()}>
              {page}
            </li>
          ))}
        </ul>
        <div className="flex p-2 items-end justify-center">
          <Toggle
            defaultChecked={darkTheme}
            icons={false}
            onChange={() => setDarkTheme(!darkTheme)}
          />
        </div>
      </div>
    </div>
  );
};

//NAVIGATION
const Navbar = ({ darkTheme, setDarkTheme }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:760px)");
  const [isMobileNavActive, setIsMobileNavActive] = useState(true);

  return (
    <nav className="border-b-2">
      {isAboveMediumScreens ? (
        <DesktopNav darkTheme={darkTheme} setDarkTheme={setDarkTheme} d />
      ) : (
        <MobileNav
          isMobileNavActive={isMobileNavActive}
          setIsMobileNavActive={setIsMobileNavActive}
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
        />
      )}
    </nav>
  );
};

export default Navbar;
