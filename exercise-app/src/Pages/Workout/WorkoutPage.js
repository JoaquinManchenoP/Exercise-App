import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./workout-page.css";
import ExerciseCard from '../../Components/Card/ExerciseCard';
import { GiBiceps } from 'react-icons/gi';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiFillSetting } from 'react-icons/ai'
import DeleteWorkoutPopUp from '../../Components/DeleteWorkoutPopUp/DeleteWorkoutPopUp';
import WorkoutTypeDropDownMenu from '../../Components/WorkoutTypeDropDown/WorkoutTypeDropDownMenu';

export default function WorkoutPage() {
    const [editWorkoutToggle, setEditWorkoutToggle] = useState(false);
    const [deleteWorkoutPopUp, setDeleteWorkoutPopUp] = useState(false);

    useEffect(() => {
        setEditWorkoutToggle(false);
        setDeleteWorkoutPopUp(false);
    }, [])

    const handleEditWorkout = () => {
        if(editWorkoutToggle){
            setEditWorkoutToggle(false);
        }else{
            setEditWorkoutToggle(true);
        }
    }

    const handleDeletePopUp = () => {
        if(deleteWorkoutPopUp){
            setDeleteWorkoutPopUp(false);
        }else{
            setDeleteWorkoutPopUp(true);
        }
    }
    console.log(deleteWorkoutPopUp);
    return (
        <div> 
            {deleteWorkoutPopUp && (
                <DeleteWorkoutPopUp deleteWorkoutPopUp = {deleteWorkoutPopUp} setDeleteWorkoutPopUp={setDeleteWorkoutPopUp}  />
            )}
            <div className = "workout__top__section">
               <div className = "workout_top__section__content" >
                   <div className="workout__type__icon">
                       <Link to = "/">
                       <GiBiceps className = "workout__type"/>
                       </Link>
                   </div>
                <div className="edit__workout__button__container" onClick = {handleEditWorkout} >
                        <AiFillSetting className='edit__workout__button' />
                   </div>
                   <div className="delete__workout__container" onClick = {handleDeletePopUp} >
                        <TiDeleteOutline className = "delete__workout__button"/>
                   </div>
               </div>
            </div>
        <div className = "title__section">
            <div className="workout__page__title">
                <p>Workout</p>
            </div>
            <div className = "workout__name__subtitle">
                <p>Name of the workout</p>
                {editWorkoutToggle && (
                <div className="edit__workout__name__section">
                    <input placeholder = "New Workout Name"></input>
                    <p>Update</p>
                </div>
                )}
            </div>
                <div className="workout__type__subtitle">
                    <p>Workout Type</p>
                    {editWorkoutToggle && (
                    <div className="edit__workout__name__section">
                        <WorkoutTypeDropDownMenu/>
                        <p>Update</p>
                    </div>
                    )}
                </div>
        </div>
            <h3 className = 'exercises__title'>Exercises</h3>
            <div className = "workout__details__section">  
                <div className = "wokout__details__content">
                    <ExerciseCard editWorkoutToggle = {editWorkoutToggle}/>
                </div>
            </div>
        </div>
    )
}
