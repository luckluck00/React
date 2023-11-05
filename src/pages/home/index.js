import React, { useState } from 'react';
import './index.css';
import TopButton from './components/TopButton';
import { GROUP } from '../../data';
import SetProduct from './components/SetProduct';
import GetProduct from './components/GetProduct';
import { useSelector } from 'react-redux';

function Home() {
  const [selectGroup, setSelectGroup] = useState();
  const [showGetProduct, setShowGetProduct] = useState(false); // 新增狀態 showGetProduct

  function groupSelect(selectedButton) {
    tabContent = selectedButton;
    setSelectGroup(selectedButton);
    console.log(selectGroup);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectGroup) {
    tabContent = (
      <div id="tab-content">
        <h2>{GROUP[selectGroup].title}</h2>
        <p>{GROUP[selectGroup].description}</p>
        <img src={GROUP[selectGroup].image} alt={GROUP[selectGroup].title} className="photo" />
      </div>
    );
  }

  const state = useSelector((state) => state.shop);

  const handleAddProduct = () => {
    setShowGetProduct(true); // 在按下 "新增" 按鈕時設置 showGetProduct 為 true
  };

  return (
    <div className="app">
      <nav className="nav">
        <menu className="menu">
          <TopButton isSelected={selectGroup === 'ITZY'} onSelect={() => groupSelect('ITZY')}>
            ITZY
          </TopButton>
          <TopButton isSelected={selectGroup === 'GIDLE'} onSelect={() => groupSelect('GIDLE')}>
            (G)I-DLE
          </TopButton>
          <TopButton isSelected={selectGroup === 'LESSERAFIM'} onSelect={() => groupSelect('LESSERAFIM')}>
            LE SSERAFIM
          </TopButton>
        </menu>
      </nav>
      <section>
        {tabContent}
      </section>
      <SetProduct onAddProduct={handleAddProduct} />{/* 將 handleAddProduct 傳遞給 SetProduct */}
      <div className="list">
        {showGetProduct && state.profile.productState ? <GetProduct /> : null} {/* 根據 showGetProduct 和狀態決定是否渲染 GetProduct */}
      </div>
    </div>
  );
}

export default Home;
