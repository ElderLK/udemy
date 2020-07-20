import React, { useState, Fragment } from 'react'; 
import Die from './Die';

import './RollDice.css'

const SIDES = ["one", "two", "three", "four", "five", "six"];

const RollDice = () => {
    const [ faces, setFaces ] = useState({ die1: "one", die2: "one" });
    const [ rolling , setRolling ] = useState(false);

    const roll = () => {
        const one = Math.floor(Math.random() * SIDES.length);
        const two = Math.floor(Math.random() * SIDES.length);
        setFaces({die1:SIDES[one], die2: SIDES[two]});
        setRolling(true);

        // wait 1seg
        setTimeout(() => {
            setRolling(false);
        }, 1000)
    }

    return (
            <div className="roll-dice">
                <div>
                    <Die face={faces.die1} rolling={rolling}/>
                    <Die face={faces.die2} rolling={rolling}/>
                </div>
                <button onClick={roll} disabled={rolling}>{
                    rolling ? "Rolling..." : "Roll Dice!"
                }</button>
            </div>
        )
}

export default RollDice;
