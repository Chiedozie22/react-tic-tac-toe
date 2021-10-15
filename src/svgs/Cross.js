import React from 'react';

export default function Cross(props){
    const size = props.size || 100

    return(
        <svg width={size} height={size} viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L130 130" stroke="yellow" strokeWidth="10" strokeLinecap="round"/>
            <path d="M5 130L130 5" stroke="yellow" strokeWidth="10" strokeLinecap="round"/>
            <path d="M5 130L130 5" stroke="yellow" strokeOpacity="0.2" strokeWidth="10" strokeLinecap="round"/>
        </svg>

    )
}