import React, { useState } from "react";
import styles from './Help.module.css';

function Help() {

    const [help, setHelp] = useState(false)
    //Help menu
    function handleClick() {
        setHelp(!help)
    }

    return (
        <div className={styles.help}>
                <button className={styles.btn} onClick={handleClick}>How to play</button>
                <div className={ help ? styles.howToPlayHidden : styles.howToPlay}>
                    <h1>How to Play</h1>
                    <ul className={styles.ul}>
                        <li className={styles.li}>Press "Play Interval" button to hear the two notes</li>
                        <li className={styles.li}>See if you recognize the interval by ear</li>
                        <li className={styles.li}>Interval options: m2, M2, m3, M3, p4, tt, p5, m6, M6, m7, M7, p8</li>
                        <li className={styles.li}>For this game, capitol and lowercase letters matter.</li>
                        <li className={styles.li}>m = minor, M = major</li>
                        <li className={styles.li}>Check your answer by clicking "Guess"</li>
                        <li className={styles.li}>You get four guesses before a new interval will be played</li>
                    </ul>
                </div>
            </div>
    );
}

export default Help;