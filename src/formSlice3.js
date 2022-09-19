import { createSlice } from '@reduxjs/toolkit';


const Form3 = createSlice({
    name: "form2",
    initialState: {
        companyname: "",
        salary: "",
        jobtype: "",
        designation: "",
    },
    reducers: {
        updateVal2(state, actions) {
            state.companyname = actions.payload.companyname;
            state.salary = actions.payload.salary;
            state.jobtype = actions.payload.jobtype;
            state.designation = actions.payload.designation;
        },

    },
});

export const { updateVal2 } = Form3.actions;

export default Form3.reducer;