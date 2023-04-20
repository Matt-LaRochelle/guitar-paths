import React, { useState } from "react";
import styles from './IntervalGame.module.css'
import audioClip from '../noteSounds/noteSounds';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import Help from './Help';

function IntervalGame() {

    //Individual sound clips
    const audioClips = audioClip;
    //Game logic without additional settings
    const [note1, setNote1] = useState(audioClips[10].clip);
    const [note2, setNote2] = useState(audioClips[22].clip);
    const [interval, setInterval] = useState(12);
    const [inputText, setInputText] = useState("");
    const [answer, setAnswer] = useState("p8");
    const [count, setCount] = useState(4);

    //Green check mark or red x
    const [gotAnswer, setGotAnswer] = useState(null);

    //Additional settings
    const [ascending, setAscending] = useState(false);
    const [descending, setDescending] = useState(false);
    const [melodic, setMelodic] = useState(false);
    const [harmonic, setHarmonic] = useState(false);

    function playInterval() {
        if (melodic === true && harmonic === true) {
            // alert("How do I do this?")
            let randomChoice = Math.round(Math.random());
            if (randomChoice) {
                const first_note = new Audio(note1);
                first_note.play();
                setTimeout(() => {
                    const second_note = new Audio(note2);
                    second_note.play();
                }, 1000);
            } else if (!randomChoice) {
                const first_note = new Audio(note1);
                first_note.play();
                const second_note = new Audio(note2);
                second_note.play();
            }
            

        } else if (melodic === true) {
            const first_note = new Audio(note1);
            first_note.play();
            setTimeout(() => {
                const second_note = new Audio(note2);
                second_note.play();
            }, 1000);

        } else if (harmonic === true) {
            const first_note = new Audio(note1);
            first_note.play();
            const second_note = new Audio(note2);
            second_note.play();
        } else if (harmonic !== true && melodic !==true) {
            alert("You must have either melodic or harmonic selected, or both")
        } else if (ascending !==true && descending !==true) {
            alert("You must have either ascending or descending selected or both!")
        }
    }


    //Function for logging what is written in input
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
        // console.log(inputText)
    }

    function settings(e) {
        if (e.target.id === "ascending") {
            setAscending(!ascending)
        } else if (e.target.id === "descending") {
            setDescending(!descending)
        } else if (e.target.id === "melodic") {
            setMelodic(!melodic)
        } else if (e.target.id === "harmonic") {
            setHarmonic(!harmonic)
        }
        console.log(
            "Ascending: ", ascending,
            "Descending: ", descending,
            "Melodic: ", melodic,
            "Harmonic :", harmonic
        )
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
        if (ascending === true && descending === true) {
            let randomChoice = Math.round(Math.random());
            if (randomChoice) {
                const n1 = Math.floor(Math.random() * (37 - interval));
                const n2 = n1 + interval
                setNote1(audioClips[n1].clip);
                setNote2(audioClips[n2].clip);
            } else if (!randomChoice) {
                const n1 = Math.floor(Math.random() * (37 - interval)) + interval;
                const n2 = n1 - interval
                setNote1(audioClips[n1].clip);
                setNote2(audioClips[n2].clip);
            }
        } else if (ascending === true) {
            const n1 = Math.floor(Math.random() * (37 - interval));
            const n2 = n1 + interval
            setNote1(audioClips[n1].clip);
            setNote2(audioClips[n2].clip);
        } else if (descending === true) {
            const n1 = Math.floor(Math.random() * (37 - interval)) + interval;
            const n2 = n1 - interval
            setNote1(audioClips[n1].clip);
            setNote2(audioClips[n2].clip);
        } else {
            alert("You must select either ascending, or descending, or both")
        }
        
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
        if (ascending === true && descending === true) {
            let randomChoice = Math.round(Math.random());
            if (randomChoice) {
                const n1 = Math.floor(Math.random() * (37 - interval));
                const n2 = n1 + interval
                setNote1(audioClips[n1].clip);
                setNote2(audioClips[n2].clip);
            } else if (!randomChoice) {
                const n1 = Math.floor(Math.random() * (37 - interval)) + interval;
                const n2 = n1 - interval
                setNote1(audioClips[n1].clip);
                setNote2(audioClips[n2].clip);
            }
        } else if (ascending === true) {
            const n1 = Math.floor(Math.random() * (37 - interval));
            const n2 = n1 + interval
            setNote1(audioClips[n1].clip);
            setNote2(audioClips[n2].clip);
        } else if (descending === true) {
            const n1 = Math.floor(Math.random() * (37 - interval)) + interval;
            const n2 = n1 - interval
            setNote1(audioClips[n1].clip);
            setNote2(audioClips[n2].clip);
        } else {
            alert("You must select either ascending, or descending, or both")
        }
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
            <button>Settings</button>
                <label>Ascending</label>
                <input type="checkbox" id="ascending" onChange={settings} ></input>
                <label>Descending</label>
                <input type="checkbox" id="descending" onChange={settings} ></input>
                <label>Melodic</label>
                <input type="checkbox" id="melodic" onChange={settings} ></input>
                <label>Harmonic</label>
                <input type="checkbox" id="harmonic" onChange={settings} ></input>
                

            <button className={styles.btn} onClick={playInterval}>Play Interval</button>
            <label className={styles.tries}>Tries: {count}</label>
            <input className={styles.input} onChange={handleChange} type="text" value={inputText} />
            <button className={styles.btn} type="submit" onClick={check_answer}>Guess</button>
            { gotAnswer === true ? <AiOutlineCheckCircle className={styles.correct} /> : null }
            { gotAnswer === false ? <AiOutlineCloseCircle className={styles.incorrect} /> : null }
            <Help />
        </div>
    );
}

export default IntervalGame;