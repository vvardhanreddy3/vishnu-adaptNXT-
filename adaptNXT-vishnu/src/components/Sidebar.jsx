import React from 'react'
import '../App.css'
import logo from '../assets/adaptnxt.png'

const Sidebar = (props) => {
    const {selectedOption, changeSelectedOption} = props
    
    const allOptions = [
        'Dashboard', 'Inventory', 'Order', 'Returns', 'Customers', 'Shipping', 'Channel', 'Integration', 'Calculators', 'Reports', 'Account'
    ]
  return (
    <div className='sidebarContainer'>
        <div className='sidebarTop'>
            <img  src={logo} alt='logo'/>
        </div>
        <ul className='options'>
            {
                allOptions.map(eachoption => {
                    return(
                    <li key={eachoption} className={selectedOption === eachoption ? 'options-selected' : null}>
                        <button type='button' value={eachoption} onClick={(e) => changeSelectedOption(e.target.value)}>
                            {eachoption}
                        </button>
                    </li>
                    )
                })
            }
        </ul>
    </div>
   
  )
}

export default Sidebar