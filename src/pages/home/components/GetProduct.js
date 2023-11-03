import React from "react";
import { useDispatch , useSelector} from "react-redux";
import { clearProduct } from "../../../store/shopSlice";

const GetProduct = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.shop);
    console.log(state);
    const handleClearProduct = () => {
        dispatch(clearProduct());
    }

    return (
        <div>
            <p>代購商品名稱: {state.profile.productName}</p>

            <p>代購商品簡介: {state.profile.description}</p>
            <button onClick={handleClearProduct}>清除商品</button>
        </div>
    )
}

export default GetProduct




