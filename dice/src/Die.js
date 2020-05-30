import React from 'react';
import './Die.css';

const Die = ({ face, rolling }) => (
    <i className={`fas fa-dice-${face} ${rolling ? 'shaking' : ''}`}></i>
)

export default Die;
