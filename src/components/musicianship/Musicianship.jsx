import React from "react";
import styles from './Musicianship.module.css';
import Single from './single_notes_game/Single';

function Musicianship() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Musicianship</h1>
            <Single />
            {/* <h2>Intervals</h2>
            <h4>Ascending:</h4>
            <ul>
                <li>Minor 2nd: Jaws</li>
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
            </ul> */}
        </div>
    );
}

export default Musicianship;