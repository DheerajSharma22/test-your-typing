import React from "react";
import useCustomHook from "../Hooks/useCustomHook";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";

const ResultModal = () => {
  const { restartTest } = useCustomHook();
  const { timer, correctChars, typedChars } =
    useSelector((state) => state.mainSlice);

  let totalCharsTyped = typedChars.length;
  let correctCharsCount = correctChars.filter(Boolean).length;
  let wrongChars = totalCharsTyped - correctCharsCount;
  let grossSpeed = Math.floor((totalCharsTyped / 5)) / timer;
  let accuracy = (correctCharsCount / totalCharsTyped).toFixed(2) * 100;


  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.9)] flex flex-col items-center justify-center">
      <div className="lg:w-[70vw] w-[90%] lg:h-auto  bg-bgPrimary rounded-md p-10">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
          <div className=" bg-bgSecondary p-10 rounded-md flex flex-col items-center justify-center gap-3"
          data-tooltip-content="Words per minute / Characters per minute" data-tooltip-id="my-tooltip" data-tooltip-place="top">
            <p className="text-2xl capitalize text-center">Wpm/cpm</p>
            <p className="text-2xl capitalize text-textSecondary">
              {grossSpeed} / {totalCharsTyped}
            </p>
          </div>
          <div className=" bg-bgSecondary p-10 rounded-md flex flex-col items-center justify-center gap-3"
          data-tooltip-content="Correct / Incorrect" data-tooltip-id="my-tooltip" data-tooltip-place="top">
            <p className="text-2xl capitalize text-center">Characters</p>
            <p className="text-2xl capitalize text-textSecondary">
              {correctCharsCount} / {wrongChars}
            </p>
          </div>
          <div className=" bg-bgSecondary p-10 rounded-md flex flex-col items-center justify-center gap-3"
          data-tooltip-content="time taken to complete test" data-tooltip-id="my-tooltip" data-tooltip-place="top">
            <p className="text-2xl capitalize">time</p>
            <p className="text-2xl capitalize text-textSecondary">{timer}m</p>
          </div>
          <div className=" bg-bgSecondary p-10 rounded-md flex flex-col items-center justify-center gap-3"
          data-tooltip-content="accuracy percentage" data-tooltip-id="my-tooltip" data-tooltip-place="top">
            <p className="text-2xl capitalize">accuracy</p>
            <p className="text-2xl capitalize text-textSecondary">
              {accuracy}
              %
            </p>
          </div>
          <div className=" bg-bgSecondary p-10 rounded-md flex flex-col items-center justify-center gap-3" data-tooltip-content="error percentage" data-tooltip-id="my-tooltip" data-tooltip-place="top">
            <p className="text-2xl capitalize">error</p>
            <p className="text-2xl capitalize text-textSecondary">{100 - accuracy}%</p>
          </div>
          <div className=" bg-bgSecondary p-10 rounded-md flex flex-col items-center justify-center gap-3"
          data-tooltip-content="Total characters typed." data-tooltip-id="my-tooltip" data-tooltip-place="top">
            <p className="text-2xl capitalize text-center">total characters typed</p>
            <p className="text-2xl capitalize text-textSecondary">
              {totalCharsTyped}
            </p>
          </div>
        </div>

        <p className="text-2xl text-textSecondary mt-5">Typed Characters</p>
        <div className="text-lg text-justify mt-3  max-h-[150px] overflow-y-auto">
          {Array.from(typedChars).map((char, index) => (
            <span
              key={index}
              className={`${correctChars.length > index ? correctChars[index] ? "text-green-500" : char === ' ' ? "bg-red-500" : "text-red-500" : ""}`}
            >
              {char}
            </span>
          ))}
        </div>

        <div className="w-full text-center mt-8">
          <button
            className="text-xl py-3 px-8 bg-textSecondary text-bgPrimary cursor-pointer rounded-md"
            onClick={restartTest}
          >
            Restart Test
          </button>
        </div>

        <Tooltip id="my-tooltip" />
      </div>
    </div>
  );
};

export default ResultModal;
