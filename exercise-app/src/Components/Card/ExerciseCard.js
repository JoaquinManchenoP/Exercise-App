import React from 'react'
import '../Card/exercise-card.css';
import { Link } from "react-router-dom";
import { TiDeleteOutline } from 'react-icons/ti';

export default function ExerciseCard({editWorkoutToggle}) {

    console.log(editWorkoutToggle);
    return (
        <div className = "card__container">
            {editWorkoutToggle && (
                <div className = "delete__exercise__button">
                <TiDeleteOutline/>
                </div>
            )}
            
         <div className = "exercise">
      
            <Link to = "/exercise" style = {{textDecoration:'none'}}>
            <div className="exercise__content">
                <div >
                    <p className = "exercise__title">Exercise Title</p>
                </div>
                <div className="exercise__details">
                    <div>
                        Weight
                    </div>
                    <div>
                        Sets
                    </div>
                    <div>
                        Reps
                    </div>
                    <div>
                        Duration
                    </div>
                </div>
            </div>
            </Link>
        </div>
     </div>
    )
}
