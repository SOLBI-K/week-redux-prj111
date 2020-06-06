//dispatch ==> reducer로 감

import React, {useEffect} from "react";
import {FETCH_CATEGORY} from "../actions/types";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import {NavLink} from "react-router-dom";
/*
    View => dispatch => export default function(state=initialState,action)
            ========
            dispatch({
                type: ,
                payload:
            })            ==> state => store => subscribe

    useDispatch : dispatch function 사용하기 위해 가져옴. data 전송용.
    useSelector : 변경된 data 가져옴
 */
export default function Category(props) {
    const dispatch=useDispatch(); //reducer 함수를 호출

    //[EVENT]
    useEffect(()=>{
        axios.get('http://localhost:3355/category')
            .then((res)=>{
                dispatch({
                    type:FETCH_CATEGORY, //--> 등록한 타입(필수값)
                    payload:res.data //--> 실제 데이터(데이터는 없을 수 있음)
                })
            });
    }, []);

    //갱신된 state 읽기
    const category_data=useSelector((state)=>state.foods.category);

    //[RENDER]
    const html=category_data.map((m)=>
        <div className="col-md-4">
            <div className="thumbnail">
                <NavLink to={"/cate_food/"+m.cateno}>
                    <img src={m.poster} alt="Lights" style={{"width": "100%"}}/>
                </NavLink>
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    );
    return (
        <div className={"row"}>{html}</div>
    )

}