import { configureStore, createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "book",
    initialState: [],
    reducers:{
        addBook:(state, action)=>{
            const newBook = {
                title: action.payload.title,
                author: action.payload.author,
                edition: action.payload.edition
            }

            state.push(newBook);
        },
        deleteBook:(state, action) => {
            state = state.filter((t)=> t.id!== action.payload)
        }
    }
})

const bookStore = configureStore({
    reducer:{
        book: bookSlice.reducer
    }
})

export default bookStore;