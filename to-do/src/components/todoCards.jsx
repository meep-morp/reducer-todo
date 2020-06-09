import React from "react";

const TodoCards = props => {
    const { todos, onComplete } = props;

    return (
        <div className="todoCards">
            {todos.map(todo => (
                <div
                    className="singleCard"
                    onClick={() => onComplete(todo.id)}
                >
                    <p className={todo.completed ? 'strike' : ''}>{todo.item}</p>
                    <p>{todo.completed ? 'DONE' : 'X'}</p>
                </div>
            ))}
        </div>
    )
}

export default TodoCards;