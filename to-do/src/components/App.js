import React, { useState, useReducer } from "react";
import { reducer, initialState } from "./reducers/todoReducer";
import "../style/App.css";
import Form from "./form";
import TodoCards from "./todoCards";

function App() {
	const [value, setValue] = useState("");
	const [{ todos }, dispatch] = useReducer(reducer, { todos: [initialState] });

	const onChangeHandler = event => {
		setValue(event.target.value);
	};

	const onSubmitHandler = event => {
		event.preventDefault();
		dispatch({ type: "NEW_TODO", payload: value });
		setValue("");
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

	return (
		<div className="App">
			<Form
				dispatch={dispatch}
				value={value}
				setValue={setValue}
				onSubmitHandler={onSubmitHandler}
				onChangeHandler={onChangeHandler}
			/>
			<TodoCards todos={todos} onComplete={onComplete} />
		</div>
	);
}

export default App;
