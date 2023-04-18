import React from "react";
import styles from './Intervals.module.css';
import audioClip from '../noteSounds/noteSounds';
import m2 from './intervalDiagrams/m2.png';

import intervals from '../noteSounds/intervalSounds';



function Intervals() {
    const audioClips = audioClip;

    // Plays the two note interval
    function interval(e) {
        const note = new Audio(audioClips[5].clip);

        // Turn button ID into number for dynamic intervals
        let n = (5 + Number(e.target.id))
        note.play();
        setTimeout(() => {
            const note2 = new Audio(audioClips[n].clip);
            note2.play();
        }, 1000); 
    }

    // Plays brief clip of interval in context of song
    function context(e) {
        // Turn button ID into number for dynamic intervals
        let n = Number(e.target.id);
        const sample = new Audio(intervals[n].clip);
        sample.play();
    }


    return (
        <div className={styles.container}>
            <h2>Intervals</h2>
            <h4>Ascending:</h4>
            <ul>
                <li className={styles.li}>
                    <p>Minor 2nd: Jaws</p>
                    <button className={styles.btn} id="1" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="0" onClick={context}>Interval in Context</button>
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
                    <img className={styles.diagram} src={m2} alt="diagram" />
                </li>
                <li className={styles.li}>
                    <p>Major 2nd: Happy Birthday</p>
                    <button className={styles.btn} id="2" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="1" onClick={context}>Interval in Context</button>
                </li>
                <li>
                    <p>Minor 3rd: Greensleeves</p>
                    <button className={styles.btn} id="3" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="2" onClick={context}>Interval in Context</button>
                </li>
                <li>
                    <p>Major 3rd: Oh When The Saints</p>
                    <button className={styles.btn} id="4" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="3" onClick={context}>Interval in Context</button>
                </li>
                <li>
                    <p>Perfect 4th: Wedding March</p>
                    <button className={styles.btn} id="5" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="4" onClick={context}>Interval in Context</button>
                </li>
                <li>
                    <p>Tritone: The Simpsons</p>
                    <button className={styles.btn} id="6" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="5" onClick={context}>Interval in Context</button>
                </li>
                <li>
                    <p>Perfect 5th: Star Wars</p>
                    <button className={styles.btn} id="7" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="6" onClick={context}>Interval in Context</button>
                </li>
                <li>
                    <p>Minor 6th: Go Down Moses</p>
                    <button className={styles.btn} id="8" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="7" onClick={context}>Interval in Context</button>
                </li>
                <li>
                    <p>Major 6th: My Bonnie Lies Over The Ocean</p>
                    <button className={styles.btn} id="9" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="8" onClick={context}>Interval in Context</button>
                </li>
                <li>
                    <p>Minor 7th: Somewhere</p>
                    <button className={styles.btn} id="10" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="9" onClick={context}>Interval in Context</button>
                </li>
                <li>
                    <p>Major 7th: Take On Me</p>
                    <button className={styles.btn} id="11" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="10" onClick={context}>Interval in Context</button>
                </li>
                <li>
                    <p>Perfect Octave: Somewhere Over The Rainbow</p>
                    <button className={styles.btn} id="12" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="11" onClick={context}>Interval in Context</button>
                </li>
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