import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: {
        productName: "",
        photo: null,
        description: "",
        money: 0,
        productState: false
      },
}

const shopSlice = createSlice({
    name: "shop",
    initialState: initialState,
    reducers: { 
        addProduct(state , action){
            const {productName , photo , description, money} = action.payload;
            state.profile = {
                productName,
                photo,
                description,
                money,
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
