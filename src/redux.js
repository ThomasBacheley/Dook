import { configureStore, createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "book",
    initialState: [],
    reducers:{
        addBook:(state, action)=>{
            const newBook = {
                id: action.payload.id,
                title: action.payload.title,
                author: action.payload.author
            }

            state.push(newBook);
        },
        clearBook:(state, action) => {
            state.splice(0, state.length);
        }
    }
})

const userBookSlice = createSlice({
    name: "userBook",
    initialState: [],
    reducers:{
        addBook:(state, action)=>{
            const newBook = {
                id: action.payload.id,
                title: action.payload.title,
                author: action.payload.author
            }

            state.push(newBook);
        },
        deleteBook:(state, action) => {
            const index = state.map(m => m.id).indexOf(action.payload.id, 0);
            if (index > -1) {
                state.splice(index, 1);
            }
        }
    }
})

const bookStore = configureStore({
    reducer:{
        book: bookSlice.reducer,
        userbook: userBookSlice.reducer
    }
})

export default bookStore;