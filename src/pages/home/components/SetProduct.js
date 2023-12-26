import React, {useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/shopSlice';
import '../index.css'

const SetProduct = ({onAddProduct}) => {
  const dispatch = useDispatch();
  const productNameRef = useRef();
  const photoRef = useRef();
  const descriptionRef = useRef();
  const moneyRef = useRef();

  const handleAddProduct = () => {
    const productNameValue = productNameRef.current.value;
    const photoValue = photoRef.current.files[0];
    const descriptionValue = descriptionRef.current.value;
    const moneyValue = moneyRef.current.value;
    onAddProduct();

    dispatch(addProduct({ 
        productName: productNameValue, 
        photo: photoValue, 
        description: descriptionValue, 
        money: moneyValue,
    }));

  };
  
  return (
    <div >
      <p>代購商品名稱:</p>
      <div className='input-group'>
        <input className='input2' required autocomplete="off" type="text"  name="productName" id="productName" ref={productNameRef}  />
        <label className='label' htmlFor="productName">productName</label>
      </div>
      <p>代購商品照片:</p>
        <input type="file" name="photo" id="photo" ref={photoRef}  />
      <p>代購商品簡介:</p>
      <div className='input-group'>
        <input className='input2' type="text" required autocomplete="off" name="description" id="description" ref={descriptionRef}  />
        <label className='label' htmlFor="description">description</label>
      </div>
      <p>代購金額:</p>
      <div className='input-group'>
        <input className='input2' type="number" required autocomplete="off" name="money" id="money" ref={moneyRef}  />
        <label className='label' htmlFor="money">money</label>

      </div>
      <button className="add2" onClick={handleAddProduct}>
        新增
      </button>
    </div>
  );
};

export default SetProduct;
