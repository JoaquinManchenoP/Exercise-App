import React from 'react'
import { Link } from "react-router-dom";
import Header from '../../Components/Header/Header.component.js';
import WorkoutCard from '../../Components/Card/WorkoutCard.component';
import "./home-page.css";

export default function HomePage() {
    return (
        <div className = 'home__page'>   
            <Header/>
            <div className ="exercises">
            <WorkoutCard/>
            <WorkoutCard/>
            <WorkoutCard/>
            <WorkoutCard/>
            <WorkoutCard/>
            <WorkoutCard/>
            </div>
        </div>
    )
}
