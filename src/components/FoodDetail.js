import React, {useEffect} from "react";
import {fetchFoodDetail} from "../actions/foodActions";
import {useDispatch, useSelector} from "react-redux";

export default function FoodDetail(props) {
    const dispatch = useDispatch();
    const {match}=props;

    useEffect(()=>{
        dispatch(fetchFoodDetail(match.params.no));
        // function(dispatch) => reducer연결
    },[]);

    /*
        useSelector(function(state)=>{});
        useSelector함수실행 => state매개변수로하는 callback 함수실행 {}내부
     */
    // const food_data=useSelector(state=>state.foods.food_detail);
    const food_data=useSelector((state)=>state.foods.food_detail);
    const image2=String(food_data.image);
    const image=image2.split("^");
    const html=image.map((m)=>
        <td>
            <img src={m} width={"200"} height={"200"} />
        </td>
    );

    return (
        <div className={"row"}>
            <h1>FoodDetail.js {match.params.no}</h1>
            <table className={"table"}>
                <tr>{html}</tr>
                <tr>
                    <td className={"text-center"} colSpan={"4"}></td>
                </tr>
                <tr>
                    <td width={"10%"}>주소</td>
                    <td colSpan={"3"}>{food_data.address}</td>
                </tr>
                <tr>
                    <td width={"10%"}>전화</td>
                    <td colSpan={"3"}>{food_data.tel}</td>
                </tr>
                <tr>
                    <td width={"10%"}>음식종류</td>
                    <td colSpan={"3"}>{food_data.type}</td>
                </tr>
                <tr>
                    <td width={"10%"}>가격대</td>
                    <td colSpan={"3"}>{food_data.price}</td>
                </tr>
            </table>
        </div>
    );
}