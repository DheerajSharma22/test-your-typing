import React, { useEffect } from "react";
import WordContainer from "./WordContainer";
import InputContainer from "./InputContainer";
import RestartIcon from "./Svg/RestartIcon";
import { useSelector } from "react-redux";
import useCustomHook from "../Hooks/useCustomHook";
// import { setPara } from "../Redux/Slices/mainSlice";

const TypingArea = () => {
  const { testStarted } = useSelector((state) => state.mainSlice);
  const { generateRandPara } = useCustomHook();

  useEffect(() => {
    generateRandPara();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="w-full mt-10 relative min-h-[10vh]">
        {testStarted ? <WordContainer /> : ""}
        <InputContainer />
      </div>

      <RestartIcon />
    </div>
  );
};

export default TypingArea;
