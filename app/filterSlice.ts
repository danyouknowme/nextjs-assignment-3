import { createSlice } from '@reduxjs/toolkit';

interface IFilterState {
    openFilterMenu: boolean;
}

const initialState: IFilterState = {
    openFilterMenu: false
};

const FilterSlice = createSlice({
    name: "Filter",
    initialState,
    reducers: {
        setOpenFilterMenu: (state, action) => {
            state.openFilterMenu = action.payload;
        }
    }
});

export const { setOpenFilterMenu } = FilterSlice.actions;
export default FilterSlice.reducer;
