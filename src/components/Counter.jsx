import React,  { useState } from "react";
import "./counter.css"
import { useDispatch, useSelector } from "react-redux";
import { increase, reduce } from "./redux/slice/CounterSlice"

const Counter = () => {
    const dispatch = useDispatch();
    const num = useSelector(state => state.counter);


return (
    <div className="container">
    <button className="button b-plus"  onClick={() => dispatch(increase())}>+</button>
    <p className="number">{num}</p>
    <button className="button b-minus" onClick={() => dispatch(reduce())}>-</button>
    </div>
)
}


export default Counter;