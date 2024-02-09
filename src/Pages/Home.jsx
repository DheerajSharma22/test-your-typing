import React from "react";
import Header from "../Components/Header";
import TimerOptions from "../Components/TimerOptions";
import Timer from "../Components/Timer";
import TypingArea from "../Components/TypingArea";
import ResultModal from '../Components/ResultModal';
import { useSelector } from "react-redux";
import AboutModal from "../Components/AboutModal";
import Footer from "../Components/Footer";

const Home = () => {
  const { testOver, openAboutModal } = useSelector(state => state.mainSlice);


  return (
    <div className="font-mono select-none  bg-bgPrimary w-full  text-textPrimary lg:p-0 px-5" >
      <div className="max-w-[1040px] mx-auto relative min-h-[100vh]">
        <Header />
        <TimerOptions />
        <Timer />
        <TypingArea />
        <Footer />
        {openAboutModal ? <AboutModal /> : ""}
        {testOver ? <ResultModal /> : ""}
      </div>
    </div>
  );
};

export default Home;
