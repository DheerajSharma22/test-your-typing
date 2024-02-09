import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  setCorrectChars,
  setCurrIndex,
  setEndParaIndex,
  setStartParaIndex,
  setTestOver,
  setTestStarted,
  setTypedChars,
} from "../Redux/Slices/mainSlice";

const InputContainer = () => {
  const { para, testStarted, typedChars, correctChars, currIndex, startParaIndex, endParaIndex } = useSelector((state) => state.mainSlice);
  const dispatch = useDispatch();

  const keyHandler = (e) => {
    if (e.code === "Backspace") {
      e.preventDefault();
      toast.error("Backspace is not allowed");
    }

    if (
      e.code === "Home" ||
      e.code === "ArrowLeft" ||
      e.code === "ArrowRight" ||
      e.code === "ArrowDown" ||
      e.code === "ArrowUp" ||
      e.code === "Delete" ||
      (e.key === "a" && e.ctrlKey)
    ) {
      e.preventDefault();
    }
  };

  const clickHandler = (e) => {
    e.target.setSelectionRange(typedChars?.length, typedChars?.length);
    dispatch(setTestStarted(true));
  };


  const changeHandler = (inputVal) => {
    let typedChar = inputVal.split("")[currIndex];

    if (currIndex >= para.length) {
      dispatch(setTestOver(true));
      return;
    }
    

    if (currIndex >= endParaIndex - 1) {
      dispatch(setStartParaIndex(startParaIndex + 400));
      dispatch(setEndParaIndex(endParaIndex + 400));
    } else {
      if (typedChar === para[currIndex]) {
        let result = [...correctChars];
        result[currIndex] = true;
        dispatch(setCorrectChars(result));
      } else {
        let result = [...correctChars];
        result[currIndex] = false;
        dispatch(setCorrectChars(result));
      }

      dispatch(setTypedChars(inputVal));
      dispatch(setCurrIndex(currIndex + 1));
    }

  }

  return (
    <div className="top-0 bottom-0 absolute w-full h-full">
      <input
        placeholder={`${testStarted ? "" : "Click here to start..."}`}
        className={`w-full h-full ${testStarted ? "opacity-0" : ""
          } bg-transparent text-2xl border-none outline-none placeholder:text-textSecondary`}
        onKeyDown={keyHandler}
        value={typedChars}
        onChange={(e) => changeHandler(e.target.value)}
        onClick={clickHandler}
      />
    </div>
  );
};

export default InputContainer;
