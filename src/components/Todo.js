import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./../actions";

function Todo() {
  const [inputData, setInputData] = useState("");
  const mystate = useSelector((state) => state.todoReducer.list);
  console.log(mystate, removeTodo);
  const dispatch = useDispatch();

  return (
    <>
      <p>To Do List</p>
      <input
        onChange={(event) => setInputData(event.target.value)}
        type="text"
        placeholder="Enter any activity"
      />
      <button onClick={() => dispatch(addTodo(inputData), setInputData(" "))}>
        Add
      </button>
      <hr></hr>
      {mystate.map((elem) => {
        return (
          <div key={elem.id} onClick={() => dispatch(removeTodo(elem.id))}>
            <h6>{elem.data}</h6>
          </div>
        );
      })}
    </>
  );
}

export default Todo;
