import React from "react";
import Logo from "./Svg/Logo";
import AboutIcon from "./Svg/AboutIcon";
import { Tooltip } from "react-tooltip";
import { useDispatch } from "react-redux";
import { setOpenAboutModal } from "../Redux/Slices/mainSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="flex items-center justify-between w-full h-[5rem]">
      <div className="flex items-center gap-5">
        <Logo />
        <h1 className="text-2xl">TestType</h1>
      </div>

      <div className="cursor-pointer" data-tooltip-id="about-tooltip"
        data-tooltip-content="About us"
        data-tooltip-place="top" onClick={() => dispatch(setOpenAboutModal(true))}>
        <AboutIcon />
      </div>

      <Tooltip id="about-tooltip" />
    </header>
  );
};

export default Header;
