/*
    JSP(View) => DispatcherServlet => Model
    =========    =================    =====
      React             store         reducer
      function
 */
import rootReducer from '../reducers';
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";

// Redux devTools
// 미들웨어 실행 명령어 : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// logger 생성
const logger=createLogger();

// thunk 생성 (비동기 프로그램)
const initialState={};
const middleware=[thunk,logger];

const store=createStore(
    rootReducer,
    initialState,
    compose( applyMiddleware(...middleware)
        , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;