import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
}

export const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
    },
})

export const {setIsAuth} = baseSlice.actions

export const selectIsAuth = (state) => state.base.isAuth

export default baseSlice
