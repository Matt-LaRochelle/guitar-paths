import React from "react";
import styles from './Intervals.module.css';
import audioClip from '../noteSounds/noteSounds';
import min2 from './intervalDiagrams/min2.png';
import maj2 from './intervalDiagrams/maj2.png';
import min3 from './intervalDiagrams/min3.png';
import maj3 from './intervalDiagrams/maj3.png';
import p4 from './intervalDiagrams/p4.png';
import tt from './intervalDiagrams/tt.png';
import p5 from './intervalDiagrams/p5.png';
import min6 from './intervalDiagrams/min6.png';
import maj6 from './intervalDiagrams/maj6.png';
import min7 from './intervalDiagrams/min7.png';
import maj7 from './intervalDiagrams/maj7.png';
import p8 from './intervalDiagrams/p8.png';

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
            <h2 className={styles.h2}>Ascending Intervals</h2>
            <ul>
                <li className={styles.li} style={{backgroundColor: 'green'}}>
                    <div>
                        <p className={styles.p}>Minor 2nd: Jaws</p>
                        <button className={styles.btn} id="1" onClick={interval}>Interval Sound</button>
                        <button className={styles.btn} id="0" onClick={context}>Interval in Context</button>
                    </div>
                    
                    <iframe 
                        width="200" 
                        height="200" 
                        src="https://www.youtube.com/embed/2J6IA5T7RTs" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        className={styles.video}
                        >
                    </iframe>
                    <img className={styles.diagram} src={min2} alt="diagram" />
                </li>
                <li className={styles.li} style={{backgroundColor: 'blue'}}>
                    <p className={styles.p}>Major 2nd: Happy Birthday</p>
                    <button className={styles.btn} id="2" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="1" onClick={context}>Interval in Context</button>
                    <img className={styles.diagram} src={maj2} alt="diagram" />
                </li>
                <li className={styles.li} style={{backgroundColor: 'purple'}}>
                    <p className={styles.p}>Minor 3rd: Greensleeves</p>
                    <button className={styles.btn} id="3" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="2" onClick={context}>Interval in Context</button>
                    <img className={styles.diagram} src={min3} alt="diagram" />
                </li>
                <li className={styles.li} style={{backgroundColor: 'red'}}>
                    <p className={styles.p}>Major 3rd: Oh When The Saints</p>
                    <button className={styles.btn} id="4" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="3" onClick={context}>Interval in Context</button>
                    <img className={styles.diagram} src={maj3} alt="diagram" />
                </li>
                <li className={styles.li} style={{backgroundColor: 'orange'}}>
                    <p className={styles.p}>Perfect 4th: Wedding March</p>
                    <button className={styles.btn} id="5" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="4" onClick={context}>Interval in Context</button>
                    <img className={styles.diagram} src={p4} alt="diagram" />
                </li>
                <li className={styles.li} style={{backgroundColor: 'yellow'}}>
                    <p className={styles.p}>Tritone: The Simpsons</p>
                    <button className={styles.btn} id="6" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="5" onClick={context}>Interval in Context</button>
                    <img className={styles.diagram} src={tt} alt="diagram" />
                </li>
                <li className={styles.li} style={{backgroundColor: 'lime'}}>
                    <p className={styles.p}>Perfect 5th: Star Wars</p>
                    <button className={styles.btn} id="7" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="6" onClick={context}>Interval in Context</button>
                    <img className={styles.diagram} src={p5} alt="diagram" />
                </li>
                <li className={styles.li} style={{backgroundColor: 'aqua'}}>
                    <p className={styles.p}>Minor 6th: Go Down Moses</p>
                    <button className={styles.btn} id="8" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="7" onClick={context}>Interval in Context</button>
                    <img className={styles.diagram} src={min6} alt="diagram" />
                </li>
                <li className={styles.li} style={{backgroundColor: 'violet'}}>
                    <p className={styles.p}>Major 6th: My Bonnie Lies Over The Ocean</p>
                    <button className={styles.btn} id="9" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="8" onClick={context}>Interval in Context</button>
                    <img className={styles.diagram} src={maj6} alt="diagram" />
                </li>
                <li className={styles.li} style={{backgroundColor: 'maroon'}}>
                    <p className={styles.p}>Minor 7th: Somewhere</p>
                    <button className={styles.btn} id="10" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="9" onClick={context}>Interval in Context</button>
                    <img className={styles.diagram} src={min7} alt="diagram" />
                </li>
                <li className={styles.li} style={{backgroundColor: 'coral'}}>
                    <p className={styles.p}>Major 7th: Take On Me</p>
                    <button className={styles.btn} id="11" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="10" onClick={context}>Interval in Context</button>
                    <img className={styles.diagram} src={maj7} alt="diagram" />
                </li>
                <li className={styles.li} style={{backgroundColor: 'yellow'}}>
                    <p className={styles.p}>Perfect Octave: Somewhere Over The Rainbow</p>
                    <button className={styles.btn} id="12" onClick={interval}>Interval Sound</button>
                    <button className={styles.btn} id="11" onClick={context}>Interval in Context</button>
                    <img className={styles.diagram} src={p8} alt="diagram" />
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