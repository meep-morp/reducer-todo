import React, { useState, useReducer } from "react";
import { reducer, initialState } from "./reducers/todoReducer";
import vector from "../images/monitorVector.png";
import "../style/App.css";
import Form from "./form";
import TodoCards from "./todoCards";

function App() {
  const [value, setValue] = useState("");
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [initialState] });

  const editable = document.querySelectorAll('div[contentEditable]');

  const onChangeHandler = event => {
    setValue(event.target.textContent);
  };

  const onSubmitHandler = event => {
    const target = document.querySelector("#input");
    event.preventDefault();
    dispatch({ type: "NEW_TODO", payload: value });
    target.textContent = "";
  };

  const onComplete = id => {
    dispatch({
      type: "MARK_COMPLETE",
      payload: todos.map(todo => {
        if (todo.id === id) {
          if (todo.completed === false) {
            return { ...todo, completed: true };
          } else {
            return { ...todo, completed: false };
          }
        } else {
          return todo;
        }
      }),
    });
  };

  const clear = () => {
    dispatch({
      type: "CLEAR_COMPLETE",
      payload: todos.filter(todo => todo.completed !== true)
    })
  };

  return (
    <div className="App">
      <nav>
        <p>X</p>
        <p>-</p>
      </nav>
      <h1>TODO_TRACKER_64</h1>
      <Form
        dispatch={dispatch}
        value={value}
        setValue={setValue}
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
      />
      <TodoCards todos={todos} onComplete={onComplete} />
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default App;
