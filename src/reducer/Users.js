import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "users",
	initialState: { value: ["hello"] },
	reducers: {
		addUser: (state, action) => {
			// console.log(action.payload);
			state.value.push(action.payload);
		},
		deleteUser: (state, action) => {
			state.value = state.value.filter((cur) => cur !== action.payload);
		},
	},
});
export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
