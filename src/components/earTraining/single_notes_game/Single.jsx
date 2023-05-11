import React, { useState, useEffect } from "react";
import styles from './Single.module.css';
import sharps from '../../images/note-names-sharps.gif'
import flats from '../../images/note-names-flats.gif';
import audioClip from '../noteSounds/noteSounds';
import Help from './Help';
import Axios from 'axios';


import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';


function Single(props) {

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

    //Follows in the app the best high score today
    const [highScore, setHighScore] = useState(0);

    const [dbHighScore, setDbHighScore] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:3001/earTraining").then((response) => {
            if (!response.data) {
                console.log("New user!");
            } else {
                console.log(response.data);
            }
        })
    }, []);

    function play_note() {
        const note = new Audio(sound);
        note.play();
    }

    
    //Function for logging what is written in input
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
                setHighScore(highScore + 1);
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
                setHighScore(highScore + 1);
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
                setHighScore(0);
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
            <p className={styles.description}>
                Learning to identify notes by ear is an essential skill 
                for any musician, and it's also a lot of fun! It can 
                help you to play music more confidently and accurately, 
                and can also improve your ability to improvise and compose. 
                Additionally, it can make listening to music more enjoyable 
                as you start to notice the nuances and subtleties in the 
                melodies and harmonies. Don't be intimidated by the idea of 
                ear training - it's a skill that can be developed with 
                practice and patience. With each note you're able to recognize, 
                you'll feel a sense of accomplishment and progress, which can 
                be incredibly motivating. So, why not give it a try? Who knows, 
                you might just discover a new passion for music!
            </p>

            <div className={styles.grid}>
                <div className={styles.key}>
                    <h2 className={styles.title}>Notes on the Guitar</h2>
                    <h3 className={styles.title}>Sharps</h3>
                    <img className={styles.sharps} src={sharps} alt="notes and sharp notes on guitar neck" />
                    <h3 className={styles.title}>Flats</h3>
                    <img className={styles.flats} src={flats} alt="notes and flat notes on guitar neck" />
                </div>
                <div className={styles.note_game}>
                    <h2 className={styles.title}>Single Note Identification Game</h2>
                    <button className={styles.noteBtn} onClick={play_note}>Play note</button>
                    <label className={styles.tries}>Tries: {count}</label>
                    <input className={styles.input} onChange={handleChange} type="text" value={inputText} />
                    <button className={styles.guess} type="submit" onClick={check_answer}>Guess</button>
                    { gotAnswer === true ? <AiOutlineCheckCircle className={styles.correct} /> : null }
                    { gotAnswer === false ? <AiOutlineCloseCircle className={styles.incorrect} /> : null }
                </div>
            </div>
            <h3>{props.user}</h3>
            <h3>High score: {highScore}</h3>

            {/* help menu */}
            <Help />
        </div>
    );
}

export default Single;