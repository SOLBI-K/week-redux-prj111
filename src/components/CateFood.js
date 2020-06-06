import React, {useEffect} from "react";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {FETCH_CATE_FOOD, FETCH_CATE_INFO} from "../actions/types";
import {NavLink} from "react-router-dom";

export default function CateFood(props) {
    const dispatch=useDispatch();
    const {match}=props;

    useEffect(()=>{
        axios.get('http://localhost:3355/cate_food',{
            params:{
                cno:match.params.cno
            }
        }).then((res)=>{
            dispatch({
                type:FETCH_CATE_FOOD,
                payload:res.data
            })
        });

        axios.get('http://localhost:3355/cate_info',{
            params:{
                // cno:props.match.params.cno
                cno:match.params.cno
            }
        }).then((res)=>{
            dispatch({
                type:FETCH_CATE_INFO,
                payload:res.data
            })
        });
    }, []);

    //[데이터전송완료 => state 수정]

    //데이터 읽기
    const cate_food=useSelector((state)=>state.foods.cate_food);
    const cate_info=useSelector((state)=>state.foods.cate_info);

    const html=cate_food.map((m)=>
        <table className={"table"}>
            <tbody>
                <tr>
                    <td className={"text-center"} rowSpan={"3"} with={"30%"}>
                        <NavLink to={"/food_detail/"+m.no}>
                            <img src={m.image.substring(0, m.image.indexOf(","))} width={"100%"}/>
                        </NavLink>
                    </td>
                    <td width={"70%"}>{m.title}</td>
                </tr>
            <tr>
                <td>{m.address}</td>
            </tr>
                <tr>
                    <td>{m.tel}</td>
                </tr>
            </tbody>
        </table>
    );
    return (
        <div className={"row"}>
            <h1>{cate_info.title}</h1>
            <span className={"text-center"}>{cate_info.subject}</span>
            <table className={"table"}>
                    {html}
            </table>
        </div>
    )
}