import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTestOver } from "../Redux/Slices/mainSlice";
import { Tooltip } from "react-tooltip";

const Timer = () => {
  const { timer, testStarted } = useSelector(state => state.mainSlice);
  const [seconds, setSeconds] = useState();
  const dispatch = useDispatch();
  const timerRef = useRef();

  useEffect(() => {
    setSeconds(timer * 60);
  }, [timer]);

  useEffect(() => {
    // Exit early if countdown is finished
    if (testStarted && seconds <= 0) {
      dispatch(setTestOver(true));
      return;
    }

    // Set up the timer
    if (testStarted) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      // Clean up the timer
      return () => clearInterval(timerRef.current);
    }

    // eslint-disable-next-line
  }, [testStarted, seconds]);

  // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };


  return (
    <div className="w-full mt-5 flex justify-end">
    
      <span className="p-3 bg-bgSecondary rounded-md font-semibold text-xl text-textSecondary"
        data-tooltip-id="timer-tooltip"
        data-tooltip-content="Timer"
        data-tooltip-place="top">
        {formatTime(seconds)}
      </span>
      <Tooltip id="timer-tooltip" />
    </div>
  );
};

export default Timer;
