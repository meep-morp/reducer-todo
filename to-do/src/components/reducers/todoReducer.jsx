import React, { useReducer } from "react";

export const reducer = (state, action) => {
    switch (action.type) {
        default: return state;
    }
}

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}