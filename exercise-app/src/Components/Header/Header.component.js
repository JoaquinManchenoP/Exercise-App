import React from 'react'
import "./header.css";
import { BsPlusSquare } from 'react-icons/bs';
import { Link } from "react-router-dom"


export default function Header() {
    return (
        <div className = "app__header">
            <div className = "text__wrapper">
            <div className = "user__title">
                <p className = "title__text">Hello Username</p>
                <p className = "subtitle">Your workouts</p>
            </div>
            <div className = "top__right__icon">
                <Link to = "/workout" className = "new__workout">
                <BsPlusSquare className = "plus__icon"/>
                </Link>
            </div>
            </div>
        </div>
    )
}
