import React, { useState } from "react";
import styles from './IntervalGame.module.css'
import audioClip from '../noteSounds/noteSounds';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

function IntervalGame() {

    //Individual sound clips
    const audioClips = audioClip;

    const [note1, setNote1] = useState(audioClips[10].clip);
    const [note2, setNote2] = useState(audioClips[22].clip);
    const [interval, setInterval] = useState(12);
    const [inputText, setInputText] = useState("");
    const [answer, setAnswer] = useState("p8");
    const [count, setCount] = useState(4);

    //Green check mark or red x
    const [gotAnswer, setGotAnswer] = useState(null);

    function playInterval() {
        const first_note = new Audio(note1);
        first_note.play();
        setTimeout(() => {
            const second_note = new Audio(note2);
            second_note.play();
        }, 1000); 
    }


    //Function for logging what is written in input
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
        // console.log(inputText)
    }

    function check_answer() {
        if (inputText === answer) {
            //Get a new set of notes/interval/answers
        //Set interval between 1-12
        setInterval(Math.floor(Math.random() * 12) + 1)
        if (interval === 1) {
            setAnswer("m2");
        } else if (interval === 2) {
            setAnswer("M2");
        } else if (interval === 3) {
            setAnswer("m3");
        } else if (interval === 4) {
            setAnswer("M3");
        } else if (interval === 5) {
            setAnswer("p4");
        } else if (interval === 6) {
            setAnswer("tt");
        } else if (interval === 7) {
            setAnswer("p5");
        } else if (interval === 8) {
            setAnswer("m6");
        } else if (interval === 9) {
            setAnswer("M6");
        } else if (interval === 10) {
            setAnswer("m7");
        } else if (interval === 11) {
            setAnswer("M7");
        } else if (interval === 12) {
            setAnswer("p8");
        }

        //Set N1 between 0-36 (No +1 because list of sounds goes from 0-36)
        const n1 = Math.floor(Math.random() * (37 - interval));
        const n2 = n1 + interval
        setNote1(audioClips[n1].clip);
        setNote2(audioClips[n2].clip);
        // console.log("Interval: ", interval);
        // console.log("Answer: ", answer);
        // console.log("Note 1: ", n1);
        // console.log("Note 2: ", n2);
        setCount(4);
        setInputText("");
        setGotAnswer(true);
            setTimeout(() => {
                setGotAnswer(null);
            }, 1000);

        } else if (inputText !== answer) {
            setCount(count - 1);
            setInputText("");
            setGotAnswer(false);
                setTimeout(() => {
                    setGotAnswer(null);
                }, 1000);

            if (count === 1) {
                setInterval(Math.floor(Math.random() * 12) + 1)
        if (interval === 1) {
            setAnswer("m2");
        } else if (interval === 2) {
            setAnswer("M2");
        } else if (interval === 3) {
            setAnswer("m3");
        } else if (interval === 4) {
            setAnswer("M3");
        } else if (interval === 5) {
            setAnswer("p4");
        } else if (interval === 6) {
            setAnswer("tt");
        } else if (interval === 7) {
            setAnswer("p5");
        } else if (interval === 8) {
            setAnswer("m6");
        } else if (interval === 9) {
            setAnswer("M6");
        } else if (interval === 10) {
            setAnswer("m7");
        } else if (interval === 11) {
            setAnswer("M7");
        } else if (interval === 12) {
            setAnswer("p8");
        }

        //Set N1 between 0-36 (No +1 because list of sounds goes from 0-36)
        const n1 = Math.floor(Math.random() * (37 - interval));
        const n2 = n1 + interval
        setNote1(audioClips[n1].clip);
        setNote2(audioClips[n2].clip);
        // console.log("Interval: ", interval);
        // console.log("Answer: ", answer);
        // console.log("Note 1: ", n1);
        // console.log("Note 2: ", n2);
        setCount(4);
        setInputText("");
        setGotAnswer(false);
            setTimeout(() => {
                setGotAnswer(null);
            }, 1000);
            }
        }
    }


    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Interval Game</h2>
            <button className={styles.btn} onClick={playInterval}>Play Interval</button>
            <label className={styles.tries}>Tries: {count}</label>
            <input className={styles.input} onChange={handleChange} type="text" value={inputText} />
            <button className={styles.btn} type="submit" onClick={check_answer}>Guess</button>
            { gotAnswer === true ? <AiOutlineCheckCircle className={styles.correct} /> : null }
            { gotAnswer === false ? <AiOutlineCloseCircle className={styles.incorrect} /> : null }
        </div>
    );
}

export default IntervalGame;