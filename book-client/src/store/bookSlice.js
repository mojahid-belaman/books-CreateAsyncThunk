import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
    try {
        const response = await axios.get("http://localhost:3005/books");
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

const bookSlice = createSlice({
    name: 'book',
    initialState: {books: [], isLoading: false, error: null},
    extraReducers: {
        [fetchBooks.pending]: (state, action) => {
            state.isLoading = true
            state.error = null
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.isLoading = false
            state.books = action.payload
        },
        [fetchBooks.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default bookSlice.reducer