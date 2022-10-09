import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./../actions";

function Todo() {
  const [inputData, setInputData] = useState("");
  const mystate = useSelector((state) => state.todoReducer.list);
  console.log(inputData);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center flex-col mt-40">
      <p className="text-7xl">TODO LIST</p>
      <div className="w-1/2 flex mt-16 flex-1">
        <input
          onChange={(event) => setInputData(event.target.value)}
          type="text"
          placeholder="Enter any activity"
          value={inputData}
          className="h-20 w-full pl-5 border-4 border-black rounded-l-lg"
        />
        <button
          className="px-12 text-white bg-black rounded-r-lg"
          onClick={() => dispatch(addTodo(inputData), setInputData(" "))}
        >
          Add
        </button>
      </div>
      <hr></hr>
      {mystate.map((elem) => {
        return (
          <div
            key={elem.id}
            className="h-10 flex justify-between  w-1/4 pl-5 mt-8"
          >
            <p className="flex items-center">{elem.data}</p>
            <button
              className="px-3 text-white bg-black rounded-lg"
              onClick={() => dispatch(removeTodo(elem.id))}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
