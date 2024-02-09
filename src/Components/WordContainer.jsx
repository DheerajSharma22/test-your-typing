import React from "react";
import { useSelector } from "react-redux";

const WordContainer = () => {
  const { para, correctChars, currIndex, startParaIndex, endParaIndex } = useSelector(
    (state) => state.mainSlice
  );

  return (
    <div>
      <div className="text-2xl text-justify opacity-80">
        {Array.from(para).map((char, index) => (
          <span
            key={index}
            className={`${correctChars.length > index ? correctChars[index] ? "text-green-500" : char === ' ' ? "bg-red-500" : "text-red-500" : ""} ${currIndex === index ? "active" : ""} ${index < startParaIndex || index >= endParaIndex  ? "hidden" : ""}`}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordContainer;
