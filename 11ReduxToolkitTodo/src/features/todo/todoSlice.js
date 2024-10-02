import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id: 1, text: "Hello"}]
}


export const todoSlice = createSlice ({
    name: 'todo', 
    initialState,
    reducers : {
        addTodo: (state, action) => {
        // we always get these two values action while using reducers
        // state of the todo (prev) & action id necessary to remove this action provides it
            const todo = {
                id: nanoid(),  
                text: action.payload
            }
            state.todos.push(todo)
        },
        
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }, 

        updateTodo: (state, action) =>{
            if (state.todos.filter((todo)=>todo.id===action.payload)){
                action.payload.text = "update todo"
            }
             
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
// because these are functionalities and these would be used many times so as a functionality these are exported

export default todoSlice.reducer