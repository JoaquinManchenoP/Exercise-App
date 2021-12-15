import React from 'react'
import { Link } from "react-router-dom";
export default function EditExercisePage() {
    return (
        <div>
            this is the Edit exercise page
            <Link to = "/workout">
            <h3>
                Save
            </h3>
            </Link>
        </div>
    )
}
