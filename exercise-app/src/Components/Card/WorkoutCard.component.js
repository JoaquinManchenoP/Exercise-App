import React from 'react'
import "./workout-card.css";
import { GiBiceps } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";

export default function WorkoutCard() {
    return (
    <div className = "exercise__card">
    <Link to = "/workout" style = {{textDecoration: 'none'}}>
        <div className = "card__content">
            <div className = "card__exercise__icon">
                <GiBiceps/>
            </div>
            <div className = "exercise__text">
                <h2 className = "title">Wokout title</h2>
                <span className = "exercise__subtitle">45 Minutes</span>
            </div>
            
            <div className = "arrow__button">
                <h3><AiOutlineArrowRight/></h3>
            </div>
           
        </div>
        </Link>
    </div>
    )
}
