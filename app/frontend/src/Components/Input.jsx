import React from 'react'

export default function Input(props) {
    return(
        <div>
            <div className="label">
                <label className = "plat">{props.platform}</label>
                <input
                    className = "input"    
                    placeholder = "https://" 
                    maxlenght="2000">
                </input>
            </div>
        </div>
    )
} 
