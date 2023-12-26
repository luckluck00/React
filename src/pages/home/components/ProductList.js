import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/shopSlice';

const SetProduct = ({ onAddProduct }) => {
  const dispatch = useDispatch();
  const productNameRef = useRef();
  const photoRef = useRef();
  const descriptionRef = useRef();
  const [products, setProducts] = useState([]); // 使用狀態來保存商品項目

  const handleAddProduct = () => {
    const productNameValue = productNameRef.current.value;
    const photoValue = photoRef.current.files[0];
    const descriptionValue = descriptionRef.current.value;
    const moneyValue = moneyRef.current.value;

    const newProduct = {
      productName: productNameValue,
      photo: photoValue,
      description: descriptionValue,
      money: moneyValue
    };

    setProducts([...products, newProduct]); // 將新商品添加到商品列表

    onAddProduct(); // 調用 onAddProduct 函數

    dispatch(addProduct(newProduct)); // 同時將新商品提交到 Redux 狀態
  };

  return (
    <div>
      <p>代購商品名稱:</p>
      <input type="text" placeholder="productName" name="productName" id="productName" ref={productNameRef} />
      <p>代購商品照片:</p>
      <input type="file" name="photo" id="photo" ref={photoRef} />
      <p>代購商品簡介:</p>
      <input type="text" placeholder="description" name="description" id="description" ref={descriptionRef} />
      <p>代購金額:</p>
      <input type="number" placeholder="money" name="money" id="money" ref={moneyRef}  />
      <button className="add2" onClick={handleAddProduct}>
        新增
      </button>

      {/* 顯示已新增的商品 */}
      <div className="product-list">
        <h2>已新增的商品：</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <p>商品名稱: {product.productName}</p>
              <p>商品簡介: {product.description}</p>
              <p>代購金額: {product.money}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SetProduct;
