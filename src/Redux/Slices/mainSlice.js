import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currIndex: 0,
    testStarted: false,
    testOver: false,
    timer: 1,
    correctChars: [],
    para: "",
    typedChars: "",
    startParaIndex: 0,
    endParaIndex: 400,
    openAboutModal: false,
};

const mainSlice = createSlice({
    name: "mainSlice",
    initialState,
    reducers: {
        setCurrIndex(state, action) {
            state.currIndex = action.payload;
        },
        setTestStarted(state, action) {
            state.testStarted = action.payload;
        },
        setTestOver(state, action) {
            state.testOver = action.payload;
        },
        setTimer(state, action) {
            state.timer = action.payload;
        },
        setCorrectChars(state, action) {
            state.correctChars = action.payload;
        },
        setPara(state, action) {
            state.para = action.payload;
        },
        setTypedChars(state, action) {
            state.typedChars = action.payload;
        },
        setStartParaIndex (state, action) {
            state.startParaIndex = action.payload;
        },
        setEndParaIndex (state, action) {
            state.endParaIndex = action.payload;
        },
        setOpenAboutModal (state, action) {
            state.openAboutModal = action.payload;
        }
    }
});


export const { setCorrectChars, setOpenAboutModal, setCurrIndex, setTimer, setPara, setTestOver, setTestStarted, setTypedChars, setStartParaIndex, setEndParaIndex } = mainSlice.actions;
export default mainSlice.reducer;