import { useState } from 'react'
import "./index.css"
import TopButton from "./components/TopButton"
import { GROUP } from '../../data'
import SetProduct from './components/SetProduct'
import GetProduct from './components/GetProduct'
import { useSelector } from 'react-redux'
function Home() {
    const [selectGroup, setSelectGroup] = useState();
    function groupSelect(selectedButton) {
        tabContent = selectedButton;
        setSelectGroup(selectedButton);
        console.log(selectGroup);
    }

    let tabContent = <p>Please select a topic.</p>;
    if(selectGroup){
        tabContent = (
            <div id='tab-content'>
                <h2>{GROUP[selectGroup].title}</h2>
                <p>{GROUP[selectGroup].description}</p>
                <img src={GROUP[selectGroup].image} alt={GROUP[selectGroup].title} className='photo' />
            </div> 
        )
    }

    const state = useSelector(state => state.shop)

    return (
        <div className="app">
            <nav className='nav'> 
                <menu className="menu">
                    <TopButton
                        isSelected={selectGroup === 'ITZY'} 
                        onSelect={() => groupSelect('ITZY')}> 
                        ITZY 
                    </TopButton>
                    <TopButton 
                        isSelected={selectGroup === 'GIDLE'} 
                        onSelect={() => groupSelect('GIDLE')}> 
                        (G)I-DLE 
                    </TopButton>
                    <TopButton
                        isSelected={selectGroup === 'LESSERAFIM'} 
                        onSelect={() => groupSelect('LESSERAFIM')}> 
                        LE SSERAFIM 
                    </TopButton>
                </menu>
            </nav>
            <section>
                {tabContent}      
            </section>
                <SetProduct></SetProduct>
                {state.profile.productState ? <GetProduct /> : null}
            </div>
    )
}

export default Home
