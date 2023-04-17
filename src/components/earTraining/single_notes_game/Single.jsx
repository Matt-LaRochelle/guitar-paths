import React, { useState } from "react";
import styles from './Single.module.css';
import sharps from '../../images/note-names-sharps.gif'
import flats from '../../images/note-names-flats.gif';
import audioClip from '../noteSounds/noteSounds';
import Help from './Help';

import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';


function Single() {

    const audioClips = audioClip;

    //Which sound is being used
    const [sound, setSound] = useState(audioClips[29].clip);

    //Amount of tries
    const [count, setCount] = useState(4);

    //Name of note
    const [answer, setAnswer] = useState(["a"]);

    //Input text answer
    const [inputText, setInputText] = useState("");

    //Green check mark or red x
    const [gotAnswer, setGotAnswer] = useState(null);

    function play_note() {
        const note = new Audio(sound);
        note.play();
    }

    
    //Function for loggin what is written in input
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    
    //Main logic of the game
    function check_answer() {

        //First three tries:
        if (count > 1) {
            console.log(inputText);
            if (answer.includes(inputText.toLowerCase()) === true) {
                setInputText("");
                setCount(4);

                // Get a new number
                const number = Math.floor(Math.random() * 37)
                setSound(audioClips[number].clip)
                setAnswer(audioClips[number].note_name);
                
                setGotAnswer(true);
                setTimeout(() => {
                    setGotAnswer(null);
                }, 1000);
            
            } else if (answer.includes(inputText.toLowerCase()) !== true) {
                setInputText("");
                setCount(count - 1);
                
                setGotAnswer(false);
                setTimeout(() => {
                    setGotAnswer(null);
                }, 1000);
            }
            
        } 
        // Last try:
        else if (count === 1) {
            if (answer.includes(inputText.toLowerCase()) === true) {
                setInputText("");
                setCount(4);
                
                setGotAnswer(true);
                setTimeout(() => {
                    setGotAnswer(null);
                }, 1000);

                 // Get a new number
                 const number = Math.floor(Math.random() * 37)
                 setSound(audioClips[number].clip)
                 setAnswer(audioClips[number].note_name);

            } else if (answer.includes(inputText.toLowerCase()) !== true) {
                setInputText("");
                setCount(4);
                
                setGotAnswer(false);
                setTimeout(() => {
                    setGotAnswer(null);
                }, 1000);

                 // Get a new number
                 const number = Math.floor(Math.random() * 37)
                 setSound(audioClips[number].clip)
                 setAnswer(audioClips[number].note_name);
            }      
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.grid}>
                <div className={styles.key}>
                    <h2 className={styles.title}>Notes on the Guitar</h2>
                    <h3 className={styles.title}>Sharps</h3>
                    <img className={styles.sharps} src={sharps} alt="notes and sharp notes on guitar neck" />
                    <h3 className={styles.title}>Flats</h3>
                    <img className={styles.flats} src={flats} alt="notes and flat notes on guitar neck" />
                </div>
                <div className={styles.note_game}>
                    <h2 className={styles.title}>Single Note Identification</h2>
                    <button className={styles.noteBtn} onClick={play_note}>Play note</button>
                    <label className={styles.tries}>Tries: {count}</label>
                    <input className={styles.input} onChange={handleChange} type="text" value={inputText} />
                    <button className={styles.guess} type="submit" onClick={check_answer}>Guess</button>
                    { gotAnswer === true ? <AiOutlineCheckCircle className={styles.correct} /> : null }
                    { gotAnswer === false ? <AiOutlineCloseCircle className={styles.incorrect} /> : null }
                </div>
            </div>

            {/* help menu */}
            <Help />
        </div>
    );
}

export default Single;