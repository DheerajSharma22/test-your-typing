import React from "react";
import TimerIcon from "./Svg/TimerIcon";
import { useDispatch, useSelector } from "react-redux";
import { setTimer } from '../Redux/Slices/mainSlice';
import useCustomHook from "../Hooks/useCustomHook";

const TimerOptions = () => {
  const { timer } = useSelector((state) => state.mainSlice);
  const { restartTest } = useCustomHook();
  const dispatch = useDispatch();

  return (
    <div className="w-full flex items-center justify-center mt-10 gap-5">
      <TimerIcon />
      <div className="bg-bgSecondary p-3 flex items-center gap-10 rounded-md">
        <span className={`text-2xl font-bold cursor-pointer hover:text-textSecondary hover:underline ${timer === 1 && "text-textSecondary underline"}`} onClick={() => {
          dispatch(setTimer(1))
          restartTest("timer")
        }}>1m</span>
        <span className={`text-2xl font-bold cursor-pointer hover:text-textSecondary hover:underline ${timer === 5 && "text-textSecondary underline"}`} onClick={() => {
          dispatch(setTimer(5))
          restartTest("timer")
        }}>5m</span>
        <span className={`text-2xl font-bold cursor-pointer hover:text-textSecondary hover:underline ${timer === 10 && "text-textSecondary underline"}`} onClick={() => {
          dispatch(setTimer(10))
          restartTest("timer")
        }}>10m</span>
      </div>
    </div>
  );
};

export default TimerOptions;
