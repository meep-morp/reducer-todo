import React from "react";

const Form = props => {
    const { value, dispatch, setValue, onChangeHandler, onSubmitHandler } = props;

    return (
        <form onSubmit={onSubmitHandler}>
            <input
                onChange={onChangeHandler}
                value={value}
                type="text"
            />
        </form>
    )
}

export default Form;