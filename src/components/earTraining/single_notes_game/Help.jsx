import React, { useState } from "react";
import styles from './Single.module.css';

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
                        <li className={styles.li}>Press "Play note" button to hear the note</li>
                        <li className={styles.li}>Play notes on your guitar until you find one that matches</li>
                        <li className={styles.li}>Note will be somewhere on first 12 frets of guitar</li>
                        <li className={styles.li}>Refer to "Notes on the Guitar" charts to see which note it is</li>
                        <li className={styles.li}>Type note into white box</li>
                        <li className={styles.li}>Can use capitol "A" or lowercase "a"</li>
                        <li className={styles.li}>Use # for sharp and b for flat</li>
                        <li className={styles.li}>You can decide to write in sharps or flats, whichever you want practice in (A# = Bb)</li>
                        <li className={styles.li}>Examples of responses: A, a, Bb, bb, C#, c#</li>
                        <li className={styles.li}>Check your answer by clicking "Guess"</li>
                        <li className={styles.li}>You get four guesses before a new note will be played</li>
                    </ul>
                </div>
            </div>
    );
}

export default Help;