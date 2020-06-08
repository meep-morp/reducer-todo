import React, { useReducer } from "react";
import "../style/App.css";
import Form from "./form";

function reducer(state, action) {}

function App() {
	const [count, dispatch] = useReducer(reducer, 0);

	return (
		<div className="App">
			<Form />
		</div>
	);
}

export default App;
