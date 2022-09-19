import { configureStore } from '@reduxjs/toolkit';
import FormReducer from './formSlice';
import Form2Reducer from './formSlice2';
import Form3Reducer from './formSlice3';


export default configureStore({
  reducer: {
    form1: FormReducer,
    form2: Form2Reducer,
    form3: Form3Reducer,
  },
});