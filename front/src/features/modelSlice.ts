import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApiClient } from "../helpers/axios.api";
import type { RootState } from "../redux/store";

interface State {
    carInfo: any[],
    error: Error | null;
    loading: boolean
}

const initialState: State = {
    carInfo: [],
    error: null,
    loading: false
}


export const getModel = createAsyncThunk('models', async () => {
    return await axiosApiClient.get<any>('/model').then((res) => res.data)
})

export const modelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getModel.fulfilled, (state, action) => {
                state.carInfo = action.payload;
                state.loading = false;
            })
            .addCase(getModel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error as Error;
            })
            .addCase(getModel.pending, (state) => {
                state.loading = true
            })
    }
})


export const model = (state: RootState) => state.model


