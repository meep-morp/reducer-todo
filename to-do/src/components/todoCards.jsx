import React from "react";

const TodoCards = props => {

    const { todos, onComplete } = props;
    console.log(todos);

    return (
        <div className="todoCards">
            {todos.map(todo => (
                <div
                    className="singleCard"
                    onClick={() => onComplete(todo.id)}
                >
                    <h2>{todo.item}</h2>
                    <h3>{todo.completed ? 'O' : 'X'}</h3>
                </div>
            ))}
        </div>
    )
}

export default TodoCards;