import React, {useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/shopSlice';

const SetProduct = () => {
  const dispatch = useDispatch();
  const productNameRef = useRef();
  const photoRef = useRef();
  const descriptionRef = useRef();

  const handleAddProduct = () => {
    const productNameValue = productNameRef.current.value;
    const photoValue = photoRef.current.files[0];
    const descriptionValue = descriptionRef.current.value;

    dispatch(addProduct({ 
        productName: productNameValue, 
        photo: photoValue, 
        description: descriptionValue, 
    }));

  };

  return (
    <div>
      <p>代購商品名稱:</p>
      <input type="text" placeholder="productName" name="productName" id="productName" ref={productNameRef}  />
      <p>代購商品照片:</p>
      <input type="file" name="photo" id="photo" ref={photoRef}  />
      <p>代購商品簡介:</p>
      <input type="text" placeholder="description" name="description" id="description" ref={descriptionRef}  />
      <button className="add2" onClick={handleAddProduct}>
        新增
      </button>
    </div>
  );
};

export default SetProduct;
