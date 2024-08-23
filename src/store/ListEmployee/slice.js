import { createSlice } from "@reduxjs/toolkit";

const listEmployeeSlice = createSlice( {
    name: 'listEmployee',
    initialState: {
        listEmployee: [],
        listEmployeeLoading:  true,
        listEmployeeError: false,
        nextToken: ''
    },

    reducers: {
        fetchListEmployeeSuccess: (state, action) => {
            console.log(state,"state:::::")
            const {data} = action.payload
            state.listEmployee = data
        },
        listEmployeeFail: (state) => {

        } 
    }
})

export const {fetchListEmployeeSuccess, listEmployeeFail } = listEmployeeSlice.actions
export default listEmployeeSlice.reducer;