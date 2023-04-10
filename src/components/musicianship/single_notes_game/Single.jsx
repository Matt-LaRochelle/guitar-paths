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

import { AiOutlineCheckCircle, AiFillCloseCircle } from 'react-icons/ai';


function Single() {

    const audioClips = [
                    {
                        "clip": s1,
                        "note_name": ["e"]
                    },
                    {
                        "clip": s2,
                        "note_name": ["f"]
                    },
                    {
                        "clip": s3,
                        "note_name": ["f#", "gb"]
                    },
                    {
                        "clip": s4,
                        "note_name": ["g"]
                    },
                    {
                        "clip": s5,
                        "note_name": ["g#", "ab"]
                    },
                    {
                        "clip": s6,
                        "note_name": ["a"]
                    },
                    {
                        "clip": s7,
                        "note_name": ["a#", "bb"]
                    },
                    {
                        "clip": s8,
                        "note_name": ["b"]
                    },
                    {
                        "clip": s9,
                        "note_name": ["c"]
                    },
                    {
                        "clip": s10,
                        "note_name": ["c#", "db"]
                    },
                    {
                        "clip": s11,
                        "note_name": ["d"]
                    },
                    {
                        "clip": s12,
                        "note_name": ["d#", "eb"]
                    },
                    {
                        "clip": s13,
                        "note_name": ["e"]
                    },
                    {
                        "clip": s14,
                        "note_name": ["f"]
                    },
                    {
                        "clip": s15,
                        "note_name": ["f#", "gb"]
                    },
                    {
                        "clip": s16,
                        "note_name": ["g"]
                    },
                    {
                        "clip": s17,
                        "note_name": ["g#", "ab"]
                    },
                    {
                        "clip": s18,
                        "note_name": ["a"]
                    },
                    {
                        "clip": s19,
                        "note_name": ["a#", "bb"]
                    },
                    {
                        "clip": s20,
                        "note_name": ["b"]
                    },
                    {
                        "clip": s21,
                        "note_name": ["c"]
                    },
                    {
                        "clip": s22,
                        "note_name": ["c#", "db"]
                    },
                    {
                        "clip": s23,
                        "note_name": ["d"]
                    },
                    {
                        "clip": s24,
                        "note_name": ["d#", "eb"]
                    },
                    {
                        "clip": s25,
                        "note_name": ["e"]
                    },
                    {
                        "clip": s26,
                        "note_name": ["f"]
                    },
                    {
                        "clip": s27,
                        "note_name": ["f#", "gb"]
                    },
                    {
                        "clip": s28,
                        "note_name": ["g"]
                    },
                    {
                        "clip": s29,
                        "note_name": ["g#", "ab"]
                    },
                    {
                        "clip": s30,
                        "note_name": ["a"]
                    },
                    {
                        "clip": s31,
                        "note_name": ["a#", "bb"]
                    },
                    {
                        "clip": s32,
                        "note_name": ["b"]
                    },
                    {
                        "clip": s33,
                        "note_name": ["c"]
                    },
                    {
                        "clip": s34,
                        "note_name": ["c#", "db"]
                    },
                    {
                        "clip": s35,
                        "note_name": ["d"]
                    },
                    {
                        "clip": s36,
                        "note_name": ["d#", "eb"]
                    },
                    {
                        "clip": s37,
                        "note_name": ["e"]
                    },
                    ]

    const [sound, setSound] = useState(s5);
    const [count, setCount] = useState(4);
    const [answer, setAnswer] = useState(["g#", "ab"]);
    const [inputText, setInputText] = useState("");
    const [gotAnswer, setGotAnswer] = useState(null);

    function play_note() {
        const note = new Audio(sound);
        note.play();
    }

    

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    
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
        <div className={styles.grid}>
            
            <div className={styles.key}>
                <h2 className={styles.title}>Notes on the Guitar</h2>
                <h3 className={styles.title}>Sharps</h3>
                <img className={styles.sharps} src={sharps} alt="notes and sharp notes on guitar neck" />
                <h3 className={styles.title}>Flats</h3>
                <img className={styles.flats} src={flats} alt="notes and flat notes on guitar neck" />
            </div>
            <div className={styles.note_game}>
                <h2 className={styles.title}>Ear training game</h2>
                <button className={styles.noteBtn} onClick={play_note}>Play note</button>
                <label className={styles.tries}>Tries: {count}</label>
                <input className={styles.input} onChange={handleChange} type="text" value={inputText} />
                <button className={styles.guess} type="submit" onClick={check_answer}>Guess</button>
                { gotAnswer === true ? <AiOutlineCheckCircle className={styles.correct} /> : null }
                { gotAnswer === false ? <AiFillCloseCircle className={styles.incorrect} /> : null }
                
            </div>
        </div>
    );
}

export default Single;