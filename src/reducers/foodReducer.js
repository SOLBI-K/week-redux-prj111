import {FETCH_CATEGORY, FETCH_CATE_FOOD, FETCH_FOOD_DETAIL, FETCH_CATE_INFO} from "../actions/types";

//모든 state등록. actions>types.js의 변수개수와 동일.
const initialState = {
    category:[],
    cate_food:[],
    food_detail:{},
    cate_info:{}
}

/*
    var a=[1,2,3]
    var b=[...a] ==> a의 모든 값을 의미
 */
/*
    dispatch({
        type:FETCH_CATEGORY, --> 등록한 타입(필수값)
        payLoad:data(category) --> 실제 데이터(데이터는 없을 수 있음)
    })
*/
//return 값이 store에 저장될 값.
//...state 전체 state에 누적

//[Dispatch 함수]
export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case FETCH_CATE_FOOD:
            return {
                ...state,
                cate_food: action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail: action.payload
            }
        case FETCH_CATE_INFO:
            return {
                ...state,
                cate_info: action.payload
            }
        default:
            return state
    }
}