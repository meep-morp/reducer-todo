export const reducer = (state, action) => {
    console.log(state.todos)
    switch (action.type) {
        case ("NEW_TODO"):
            return {
                todos: [
                    ...state.todos,
                    {
                        item: action.payload,
                        id: new Date(),
                        completed: false
                    }
                ]
            }
        case ("MARK_COMPLETE"):
            return {todos: action.payload}
        default: console.log("default");
            return state;
    }
}

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}