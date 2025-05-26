import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApiClient } from "../helpers/axios.api";
import type { RootState } from "../redux/store";

interface State {
    tuning: any[],
    error: Error | null;
    loading: boolean
}

const initialState: State = {
    tuning: [],
    error: null,
    loading: false
}


export const getTuning = createAsyncThunk('tuning', async () => {
    return await axiosApiClient.get<any>('/tuning').then((res) => res.data)
})


export const tuningSlice = createSlice({
    name: 'tuning',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getTuning.fulfilled, (state, action) => {
                state.tuning = action.payload;
                state.loading = false;
            })
            .addCase(getTuning.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error as Error;
            })
            .addCase(getTuning.pending, (state) => {
                state.loading = true
            })
    }
})


export const tuning = (state: RootState) => state.tuning


