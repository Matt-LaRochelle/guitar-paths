import React, { useState } from "react";
import styles from './Single.module.css';
import sharps from '../../images/note-names-sharps.gif'
import flats from '../../images/note-names-flats.gif';
import s1 from '../../guitar_notes/number_notes/1.mp3';
import s2 from '../../guitar_notes/number_notes/2.mp3';
import s3 from '../../guitar_notes/number_notes/3.mp3';
import s4 from '../../guitar_notes/number_notes/4.mp3';
import s5 from '../../guitar_notes/number_notes/5.mp3';
import s6 from '../../guitar_notes/number_notes/6.mp3';
import s7 from '../../guitar_notes/number_notes/7.mp3';
import s8 from '../../guitar_notes/number_notes/8.mp3';
import s9 from '../../guitar_notes/number_notes/9.mp3';
import s10 from '../../guitar_notes/number_notes/10.mp3';
import s11 from '../../guitar_notes/number_notes/11.mp3';
import s12 from '../../guitar_notes/number_notes/12.mp3';
import s13 from '../../guitar_notes/number_notes/13.mp3';
import s14 from '../../guitar_notes/number_notes/14.mp3';
import s15 from '../../guitar_notes/number_notes/15.mp3';
import s16 from '../../guitar_notes/number_notes/16.mp3';
import s17 from '../../guitar_notes/number_notes/17.mp3';
import s18 from '../../guitar_notes/number_notes/18.mp3';
import s19 from '../../guitar_notes/number_notes/19.mp3';
import s20 from '../../guitar_notes/number_notes/20.mp3';
import s21 from '../../guitar_notes/number_notes/21.mp3';
import s22 from '../../guitar_notes/number_notes/22.mp3';
import s23 from '../../guitar_notes/number_notes/23.mp3';
import s24 from '../../guitar_notes/number_notes/24.mp3';
import s25 from '../../guitar_notes/number_notes/25.mp3';
import s26 from '../../guitar_notes/number_notes/26.mp3';
import s27 from '../../guitar_notes/number_notes/27.mp3';
import s28 from '../../guitar_notes/number_notes/28.mp3';
import s29 from '../../guitar_notes/number_notes/29.mp3';
import s30 from '../../guitar_notes/number_notes/30.mp3';
import s31 from '../../guitar_notes/number_notes/31.mp3';
import s32 from '../../guitar_notes/number_notes/32.mp3';
import s33 from '../../guitar_notes/number_notes/33.mp3';
import s34 from '../../guitar_notes/number_notes/34.mp3';
import s35 from '../../guitar_notes/number_notes/35.mp3';
import s36 from '../../guitar_notes/number_notes/36.mp3';
import s37 from '../../guitar_notes/number_notes/37.mp3';


function Single() {

    const audioClips = [s1, s2, s3, s4, s5]
    const [sound, setSound] = useState(s5);
    const [count, setCount] = useState(4);
    const [answer, setAnswer] = useState("D");

    // s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s37

    const answers = [
        {"s1": "E"},
        {"s2": "F"},
        {"s3": "F#"},
        {"s4": "G"},
        {"s5": "G#"}
    ]

    function play_note() {
        const note = new Audio(sound);
        note.play();
    }

    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    
    function check_answer() {
        if (count > 1) {
            console.log(inputText);
            setInputText("");
            setCount(count - 1);
        } else if (count === 1) {
            setCount(count + 3);
            // Get a new number
            const number = Math.floor(Math.random() * 5)
            setSound(audioClips[number]);
            const note = new Audio(sound);
        }
    }


    return (
        <div>
            <h2>Notes on the Guitar</h2>
            <div>
                <h3>Sharps</h3>
                <img className={styles.sharps} src={sharps} alt="notes and sharp notes on guitar neck" />
                <h3>Flats</h3>
                <img className={styles.flats} src={flats} alt="notes and flat notes on guitar neck" />
            </div>
            <div className={styles.note_game}>
                <h3 className={styles.title}>Ear training game</h3>
                <button className={styles.noteBtn} onClick={play_note}>Play note</button>
                <label className={styles.tries}>Tries: {count}</label>
                <input className={styles.input} onChange={handleChange} type="text" value={inputText} />
                <button className={styles.guess} type="submit" onClick={check_answer}>Guess</button>
            </div>
        </div>
    );
}

export default Single;