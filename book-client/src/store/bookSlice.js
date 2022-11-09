import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBooks = createAsyncThunk("book/fetchBooks", async (args, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const response = await axios.get("http://localhost:3005/books");
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const addBook = createAsyncThunk("book/addBook", async (data, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        await axios.post("http://localhost:3005/books", data);
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const deleteBook = createAsyncThunk("book/deleteBook", async (id, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        await axios.delete(`http://localhost:3005/books/${id}`);
    } catch (error) {
        return rejectWithValue(error);
    }
})

const bookSlice = createSlice({
    name: 'book',
    initialState: {data: [], isLoading: false, error: null},
    extraReducers: {
        // get all books
        [fetchBooks.pending]: (state, action) => {
            state.isLoading = true
            state.error = null
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
        },
        [fetchBooks.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        // add book
        [addBook.pending]: (state, action) => {
            state.isLoading = true
            state.error = null
        },
        [addBook.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data.push(action.meta.arg)
        },
        [addBook.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        // delete book
        [deleteBook.pending]: (state, action) => {
            state.isLoading = true
            state.error = null
        },
        [deleteBook.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = state.data.filter((book) => book.id !== action.meta.arg)
        },
        [deleteBook.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default bookSlice.reducer