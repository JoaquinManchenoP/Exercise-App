import React from 'react';
import "./layout.css";


export default function Layout({children}) {
    return (
        <div className = "app__layout">
            {children}
        </div>
    )
}
