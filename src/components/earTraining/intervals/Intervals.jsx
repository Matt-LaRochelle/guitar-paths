import React from "react";
import styles from './Intervals.module.css';
import audioClip from '../noteSounds/noteSounds';
import m2 from './intervalDiagrams/m2.png';

import intervals from '../noteSounds/intervalSounds';



function Intervals() {
    const audioClips = audioClip;

    function min2() {
        const note = new Audio(audioClips[0].clip);
        note.play();
        setTimeout(() => {
            const note2 = new Audio(audioClips[1].clip);
            note2.play();
        }, 1000); 
    }

    function jaws() {
        const sample = new Audio(intervals[0].clip);
        sample.play();
    }
    return (
        <div className={styles.container}>
            <h2>Intervals</h2>
            <h4>Ascending:</h4>
            <ul>
                <li className={styles.li}>
                    <p>Minor 2nd: Jaws</p>
                    <button className={styles.btn} onClick={min2}>Interval Sound</button>
                    <button className={styles.btn} onClick={jaws}>Interval in Context</button>
                    <iframe 
                        width="200" 
                        height="200" 
                        src="https://www.youtube.com/embed/2J6IA5T7RTs" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        >
                    </iframe>
                    <img className={styles.diagram} src={m2} alt="diagram" /></li>
                <li>Major 2nd: Happy Birthday</li>
                <li>Minor 3rd: Greensleeves</li>
                <li>Major 3rd: Oh When The Saints</li>
                <li>Perfect 4th: Wedding March</li>
                <li>Tritone: The Simpsons</li>
                <li>Perfect 5th: Star Wars</li>
                <li>Minor 6th: Go Down Moses</li>
                <li>Major 6th: My Bonnie Lies Over The Ocean</li>
                <li>Minor 7th: Somewhere</li>
                <li>Major 7th: Take On Me</li>
                <li>Perfect Octave: Somewhere Over The Rainbow</li>
            </ul>
            <h4>Descending:</h4>
            <ul>
                <li>Minor 2nd: Für Elise</li>
                <li>Major 2nd: ???</li>
                <li>Minor 3rd: Hey Jude</li>
                <li>Major 3rd: Summertime</li>
                <li>Perfect 4th: Flinstones</li>
                <li>Tritone: ???</li>
                <li>Perfect 5th: Flinstones</li>
                <li>Minor 6th: ???</li>
                <li>Major 6th: ???</li>
                <li>Minor 7th: ???</li>
                <li>Major 7th: ???</li>
                <li>Perfect Octave: ???</li>
            </ul>
        </div>
    );
}

export default Intervals;