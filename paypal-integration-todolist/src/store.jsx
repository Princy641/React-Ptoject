import { createStore, current } from "@reduxjs/toolkit";

const ADD_task = "task/add";
const DELETE_task = "task/delete";

const initialState = {
    task: [],

};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_task:
            return {
                ...state,
                task: [...state.task, action.Payload],

            };
        case DELETE_task:
            const updatedTask = state.task.filter((curTask, index) => {
                return index != action.Payload;
            })

            return {
                ...state,
                task: updatedTask,

            };
        default:
            return state;
    }

}

const store = createStore(taskReducer);
console.log(store);
store.dispatch({ type: ADD_task, Payload: "hello" })


export const addTask = (data) => {
    return { type: ADD_task, Payload: data };
};

export const deleteTask = (index) => {
    return { type: DELETE_task, Payload: index };
};

store.dispatch(addTask("Apple"));
store.dispatch(addTask("mango"));
store.dispatch(addTask("banana"));
store.dispatch(deleteTask("Apple"))


export default store;





