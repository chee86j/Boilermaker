import {
  createAsyncThunk,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import authSlice from "./authSlice";
import usersSlice from "./usersSlice";
import logger from "redux-logger";

//   import studentsReducer from "./students";
//   import campusesReducer from "./campuses";

// const store is the Redux store for the entire application
const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    auth: authSlice.reducer,
    //   campuses: campusesReducer,
    //   students: studentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const socketActions = {
  ...usersSlice.actions,
  ...authSlice.actions,
};

export default store;
export * from "./usersSlice";
export { socketActions };

// export {
//   fetchCampuses,
//   createCampus,
//   updateCampus,
//   deleteCampus,
// } from "./campuses";
// export {
//   fetchStudents,
//   createStudent,
//   updateStudent,
//   deleteStudent,
// } from "./students";
