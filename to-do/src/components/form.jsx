import React from "react";
import styled from "styled-components";

const Form = props => {
    const { value, dispatch, setValue, onChangeHandler, onSubmitHandler } = props;

    return (
        <form onSubmit={onSubmitHandler}>
            <span
                contentEditable="true"
                id="input"
                onInput={onChangeHandler}
                onKeyPress={onSubmitHandler}
                value={value}
                type="text"
            />
           <button onClick={onSubmitHandler}>+</button>
        </form>
    )
}

export default Form;