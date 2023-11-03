import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: {
        productName: "",
        photo: null,
        description: "",
        productState: false
      },
}

const shopSlice = createSlice({
    name: "shop",
    initialState: initialState,
    reducers: { 
        addProduct(state , action){
            const {productName , photo , description} = action.payload;
            state.profile = {
                productName,
                photo,
                description,
                productState: true
            }
        },
        clearProduct(state , action){
            state.profile = {
                ...initialState.profile
            }
        }
    }
});

export const { addProduct, clearProduct } = shopSlice.actions;

export default shopSlice.reducer;
