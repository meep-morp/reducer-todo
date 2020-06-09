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
                onKeyPress={event => {
                    if (event.charCode == 13) {
                        onSubmitHandler(event)
                    }
                }}
                value={value}
                type="text"
            />
        </form>
    )
}

export default Form;