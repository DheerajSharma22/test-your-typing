import { useDispatch, useSelector } from "react-redux";
import { setCorrectChars, setCurrIndex, setPara, setTestOver, setTestStarted, setTimer, setTypedChars } from "../Redux/Slices/mainSlice";
import Paragraphs from '../paragraphs';

const useCustomHook = () => {
    const dispatch = useDispatch();
    const { timer } = useSelector(state => state.mainSlice);

    const generateRandPara = () => {
        const randIndex = Math.floor(Math.random() * Paragraphs.length);
        const randPara = Paragraphs[randIndex].trim();
        dispatch(setPara(randPara));
    }

    const restartTest = (type) => {
        dispatch(setCurrIndex(0));
        dispatch(setTestStarted(false));
        dispatch(setTestOver(false));
        if (type !== "timer")
            dispatch(setTimer(timer === 1 ? 5 : timer === 5 ? 10 : 1));
        dispatch(setCorrectChars([]));
        dispatch(setTypedChars(""));
        generateRandPara();
    }

    return { restartTest, generateRandPara };
}

export default useCustomHook;