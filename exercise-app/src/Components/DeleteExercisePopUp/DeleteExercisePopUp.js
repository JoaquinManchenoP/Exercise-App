import React from 'react';
import "./delete-exercise-pop-up.css";
import { FaTrashAlt } from 'react-icons/fa';

export default function DeleteExercisePopUp({deleteExerciseToggle, setDeleteExerciseToggle}) {

    const handleCancelClick = () => {
        if(deleteExerciseToggle){
            setDeleteExerciseToggle(false);
        }
    }
    return (
        <div className = "pop__up__container">
            <div className="delete__confirmation">
                <div className="delete__icon__container">
                    <FaTrashAlt className = "delete__icon"/>
                </div>
                <div className="delete__popup__text">
                <div className="delete__title">
                    Delete Exercise ?
                </div>
                <div className="delete__description">
                    <p>Are you sure you want to delete this exercise.</p>
                    <p>The exercise will be deleted permanetly.</p>
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
