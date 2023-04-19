import React, { useState } from "react";
import styles from './IntervalGame.module.css'
import audioClip from '../noteSounds/noteSounds';

function IntervalGame() {
    const audioClips = audioClip;

    const [note1, setNote1] = useState(audioClips[10].clip);
    const [note2, setNote2] = useState(audioClips[22].clip);
    const [interval, setInterval] = useState(Math.floor(Math.random() * 12) + 1)


    function playInterval() {
        const first_note = new Audio(note1);
        first_note.play();
        setTimeout(() => {
            const second_note = new Audio(note2);
            second_note.play();
        }, 1000); 
        console.log(interval)
        setInterval(Math.floor(Math.random() * 12) + 1)
        setNote1(audioClips[Math.floor(Math.random() * 37) + 1].clip)
    }


    return (
        <div className={styles.container}>
            <h2>Interval Game</h2>
            <button onClick={playInterval}>Play Interval</button>
        </div>
    );
}

export default IntervalGame;