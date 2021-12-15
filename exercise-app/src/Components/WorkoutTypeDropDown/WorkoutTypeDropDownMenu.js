import React, { useState } from 'react';
import './workout-type-drop-down-menu.css';

export default function WorkoutTypeDropDownMenu() {
    const workOutTypeOptions = ['Resistance','Cardio','Sport'];
    const [toggleDropDownMenu, setToggleDropDownMenu] = useState(false);

    const handleToggleDropDown = () => {
        if(toggleDropDownMenu){
            setToggleDropDownMenu(false)
        }else{
            setToggleDropDownMenu(true);
        }
    }

    console.log(toggleDropDownMenu);
    
    return (
        <div className='drop__down__menu'>
            <div  onClick={handleToggleDropDown} className='workout__toggle__header'>
                <p>Workout Type</p>
            </div>
            {toggleDropDownMenu && ( 
                <div className="options__container">
                    {workOutTypeOptions.map((option, index) => (
                    <div className="drop__down__options">
                        <a key = {index}>{option}</a>
                    </div>
                    ))}
                </div>
            )}
        </div>
    )
}
