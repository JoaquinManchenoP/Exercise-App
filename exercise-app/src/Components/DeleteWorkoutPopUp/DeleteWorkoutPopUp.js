import React from 'react'
import './delete-workout-pop-up.css'
import { FaTrashAlt } from 'react-icons/fa';

export default function DeleteWorkoutPopUp({setDeleteWorkoutPopUp,deleteWorkoutPopUp}) {

    const handleCancelClick = () =>{
        if(deleteWorkoutPopUp){
            setDeleteWorkoutPopUp(false);
        }
        console.log(deleteWorkoutPopUp);
    }

    return (
        <div className = "pop__up__container">
            <div className="delete__confirmation">
                <div className="delete__icon__container">
                    <FaTrashAlt className = "delete__icon"/>
                </div>
                <div className="delete__popup__text">
                <div className="delete__title">
                    Delete Workout ?
                </div>
                <div className="delete__description">
                    <p>Are you sure you want to delete this workout.</p>
                    <p>The entire workout will be deleted permanetly.</p>
                </div>
            </div>
            </div>
            <div className="delete__buttons">
                    <button className = "cancel__button" onClick = {handleCancelClick}>Cancel</button>
                    <button className = "delete__button">Delete</button>
                </div>
        </div>
    )
}
