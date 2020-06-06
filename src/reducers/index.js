//reducer가 여러개일때, 한 번에 모아주는 역할
import {combineReducers} from "redux";
import foodReducer from "./foodReducer";

export default combineReducers({
    foods:foodReducer
})