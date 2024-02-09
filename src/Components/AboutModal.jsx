import React from "react";
import { setOpenAboutModal } from "../Redux/Slices/mainSlice";
import { useDispatch } from "react-redux";

const AboutModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.9)] flex flex-col items-center justify-center">
      <div className="lg:w-[70vw] w-[90%] lg:h-auto  bg-bgPrimary rounded-md p-10">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-3xl capitalize mb-4">About TypeTest</h3>
            <div className="w-10 h-10 bg-textSecondary flex items-center justify-center rounded-[100%] cursor-pointer" onClick={() => dispatch(setOpenAboutModal(false))}>
              <span className="text-bgPrimary text-2xl font-bold">
                &times;
              </span>
            </div>
          </div>
          <p className="text-lg text-justify">
            TypeTest is a minimalistic typing speed testing app built with React
            and TailwindCSS. The app allows users to test and improve their
            typing speed and accuracy. The app provides a user-friendly
            interface and intuitive feedback on typing performance.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl capitalize mb-4">current features</h3>
          <p className="text-lg mt-4 text-justify">
            <span className="text-xl text-textSecondary capitalize">
              Typing Test:
            </span>{" "}
            Users can take a typing test to measure their typing speed and
            accuracy. The test includes random sentences/paragraphs, and the
            user's typing speed is calculated in words per minute (WPM).
          </p>

          <p className="text-lg mt-4 text-justify">
            <span className="text-xl text-textSecondary capitalize">
              Time Category:
            </span>{" "}
            Users can adjust typing duration to 15s, 30s, or 60s according to
            their preference.
          </p>

          <p className="text-lg mt-4 text-justify">
            <span className="text-xl text-textSecondary capitalize">
              Statics:
            </span>{" "}
            The app displays statistics such as WPM/CPM, accuracy percentage,
            error percentage and total number of characters typed.
          </p>

          <p className="text-lg mt-4 text-justify">
            <span className="text-xl text-textSecondary capitalize">
              Watch Typing History:
            </span>{" "}
            Users can watch their previous typing history and access their
            performance.
          </p>
        </div>
      </div>
    </div>
  );
};

/*

About OpenType
OpenType is a minimalistic typing speed testing app built with React and TailwindCSS that highly inspired by MonkeyType. The app allows users to test and improve their typing speed and accuracy. The app provides a user-friendly interface and intuitive feedback on typing performance.

Current Features
Typing Test: Users can take a typing test to measure their typing speed and accuracy. The test includes random sentences/paragraphs, and the user's typing speed is calculated in words per minute (WPM).
Time Category: Users can adjust typing duration to 15s, 30s, or 60s according to their preference.
Statistics: The app displays statistics such as WPM/CPM, accuracy percentage, error percentage and total number of characters typed.
Watch Typing History: Users can watch their previous typing history and access their performance.
Responsive Design: The user interface is designed to be responsive and adapt to different screen sizes, making it accessible on various laptops or PCs.
Contact:
Telegram
,
Whatsapp
Source code:
Github Repo
*/

export default AboutModal;
