import React, {useState, useEffect} from 'react'
import { GiBiceps } from 'react-icons/gi';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiFillSetting } from 'react-icons/ai'
import './exercise-page.css';
import DeleteExercisePopUp from '../../Components/DeleteExercisePopUp/DeleteExercisePopUp';
import { Link } from "react-router-dom";

export default function ExercisePage() {
    const [editExerciseToggle, setEditExerciseToggle] = useState(false);
    const [deleteExerciseToggle, setDeleteExerciseToggle] = useState();

    useEffect(() => {
       setEditExerciseToggle(false);
       setDeleteExerciseToggle(false);
    }, []);

    const handleEditExercise = () => {
        if(editExerciseToggle){
            setEditExerciseToggle(false);
        }else{
            setEditExerciseToggle(true);
        }

        console.log(editExerciseToggle);
    }

    const handleDeleteExercise = () =>{
        if(deleteExerciseToggle){
            setDeleteExerciseToggle(false);
        }else{
            setDeleteExerciseToggle(true);
        }
    }

    return (
        <div>
            {deleteExerciseToggle && (
                <DeleteExercisePopUp deleteExerciseToggle={deleteExerciseToggle} setDeleteExerciseToggle ={setDeleteExerciseToggle} />
            )}
            <div className = "workout__top__section">
               <div className = "workout_top__section__content" >
                
                   <div className="workout__type__icon">
                       <Link to = "/">
                       <GiBiceps className = "workout__type"/>
                       </Link>
                   </div>
                   
                   <div className="edit__workout__button__container" onClick= {handleEditExercise} >
                        <AiFillSetting className='edit__workout__button'/>
                   </div>
                   <div className="delete__workout__container" onClick = {handleDeleteExercise}>
                        <TiDeleteOutline className = "delete__workout__button"/>
                   </div>
               </div>
                <div className="exercise_page__container">
                </div>
                 <div className="exercise__title__section">
                <div className="exercise__page__title">
                    <p>Exercise</p>
                </div>
                <div className="exercise__page__subtitle">
                    <p>Name of the exercise</p>
                </div>
            </div>
            <div className="exercise__details__header">
            </div>
                <div className="exercise__information__section">
                    <div className="exercise__type">
                       <p>Exercise Type: type</p>
                       {editExerciseToggle && (
                        <div className = "exercise__type__input">
                            <input ></input>
                            <p>Update</p>
                       </div>
                       )}
                    </div>
                <div className = "exercise__weight">
                    <p>Wight: 16 lbs</p>
                    {editExerciseToggle && (
                    <div className="weight__input">
                        <label>Weight</label>
                        <input></input>
                        <label>Unit</label>
                        <input></input>
                        <p>Update</p>
                    </div>
                    )}
                </div>
                <div className = "exercise__sets">
                    <p>Sets 4</p>
                    {editExerciseToggle && (
                    <div className="sets__input">
                        <input></input>
                        <p>Update</p>
                    </div>
                    )}
                </div>
                <div className = "exercise__reps">
                    <p>Reps 4</p>
                    {editExerciseToggle && (
                    <div className="reps__input">
                        <input></input>
                        <p>Update</p>    
                    </div>
                    )}
                </div>
                <div className = "exercise__duration">
                    <p>Wight: 16 lbs</p>
                    {editExerciseToggle && (
                    <div className="duration__input">
                        <label>Duration</label>
                        <input></input>
                        <label>Unit</label>
                        <input></input>
                        <p>Update</p>
                    </div>
                    )}
                </div>
            </div>
            </div>
        </div>
    )
}
