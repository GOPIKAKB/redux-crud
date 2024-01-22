import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    data: { name: '', age: '', mark: '' },
    studentData: [],
}
const itemSlice = createSlice({
    name: 'item',
    initialState: INITIAL_STATE,
    reducers: {
        updateData: (state, action) => {
            const { name, value } = action.payload
            state.data[name] = value
        },
        resetData: (state) => {
            state.data = { name: '', age: '', mark: '' }
        },
        addData: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.studentData.findIndex(item => item.name === newItem.name);

            if (existingItemIndex !== -1) {
                state.studentData = state.studentData.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, name: newItem.name, age: newItem.age, mark: newItem.mark }
                        : item
                );
            } else {
                state.studentData = [...state.studentData, newItem];
            }
        },
        deleteItem: (state, action) => {
            state.studentData = state.studentData.splice(action.payload, 1)
        },
        editData: (state, action) => {
            state.data = action.payload
        }
    }
})
export const { addData, deleteItem, updateData, editData, resetData } = itemSlice.actions;
export default itemSlice.reducer;