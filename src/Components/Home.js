import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByValue, increment } from "../Redux/counterSlice";

export default function Home() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <h1>{ counter }</h1>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(decrementByValue(9))}>decrement</button>
    </div>
  );
}
