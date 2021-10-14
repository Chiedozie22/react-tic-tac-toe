import react from 'react';

export default function Cross(props){
    const size = props.size || 100

    return(
        <svg width={size} height={size} viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5L130 130" stroke="black" stroke-width="10" stroke-linecap="round"/>
        <path d="M5 130L130 5" stroke="black" stroke-width="10" stroke-linecap="round"/>
        <path d="M5 130L130 5" stroke="black" stroke-opacity="0.2" stroke-width="10" stroke-linecap="round"/>
        </svg>

    )
}