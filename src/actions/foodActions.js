import {FETCH_FOOD_DETAIL} from "./types";
import axios from 'axios';

/*
    export const fetchFoodDetail=cno=>dispatch=>{}

    (state)=>state.foods.cate_info
    function(state){ return state.foods.cate_info }
 */

//[방식1]
export function fetchFoodDetail(no) {
    return function (dispatch) {
        axios.get('http://localhost:3355/food_detail',{
            params:{
                no:no
            }
        }).then((res)=>dispatch({
            type:FETCH_FOOD_DETAIL,
            payload:res.data
        }))
    };
}

//[방식2]
/*export const fetchFoodDetail_tmp=(no)=>dipatch=>{
    axios.get('http://localhost:3355/food_detail',{
        params:{
            no:no
        }
    }).then((res)=>{
        dispatch({
            type: FETCH_FOOD_DETAIL,
            payload: res.data
        })
    });
}*/