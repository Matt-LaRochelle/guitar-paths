import React, { useState, useEffect } from "react";
import styles from './IntervalGame.module.css'
import audioClip from '../noteSounds/noteSounds';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import Help from './Help';

function IntervalGame() {

    //Individual sound clips
    const audioClips = audioClip;

    //Foundational game logic WAS 10 and 22 p8, 12
    const [note1, setNote1] = useState(audioClips[10].clip);
    const [note2, setNote2] = useState(audioClips[22].clip);
    const [interval, setInterval] = useState(12);
    const [inputText, setInputText] = useState("");
    const [answer, setAnswer] = useState("p8");
    const [count, setCount] = useState(4);

    //Green check mark or red x
    const [gotAnswer, setGotAnswer] = useState(null);

    //Additional settings
    const [ascending, setAscending] = useState("On");
    const [descending, setDescending] = useState("Off");
    const [melodic, setMelodic] = useState("On");
    const [harmonic, setHarmonic] = useState("Off");

    //If true: interval is melodic, else if false: interval is harmonic
    const [melodicOrHarmonic, setMelodicOrHarmonic] = useState(false);

    const [displaySettings, setDisplaySettings] = useState(false);

    function settings(e) {
        if (e.target.id === "ascending") {
            if (ascending === "Off") {
                setAscending(() => "On");
            } else if (ascending === "On") {
                setAscending(() => "Off");
            } else {
                console.log(ascending);
            }
        } else if (e.target.id === "descending") {
            if (descending === "Off") {
                setDescending(() => "On");
            } else if (descending === "On") {
                setDescending(() => "Off");
            } else {
                console.log(descending);
            }
        } else if (e.target.id === "melodic") {
            if (melodic === "Off") {
                setMelodic(() => "On");
            } else if (melodic === "On") {
                setMelodic(() => "Off");
            } else {
                console.log(melodic);
            }
        } else if (e.target.id === "harmonic") {
            if (harmonic === "Off") {
                setHarmonic(() => "On");
            } else if (harmonic === "On") {
                setHarmonic(() => "Off");
            } else {
                console.log(harmonic);
            }
        }
        //Generate a new interval, notes, mel/harm - I chained them together
        newInterval();

        // console.log(
        //     "Ascending: ", ascending,
        //     "Descending: ", descending,
        //     "Melodic: ", melodic,
        //     "Harmonic :", harmonic
        // )
    }

    useEffect(() => {
        setInterval(() => Math.floor(Math.random() * 12) + 1);
        newAnswer(interval);
    }, [interval]);

    function newInterval() {
        //Set interval between 1-12
        //Then set the answer according to randomly chosen interval
        setInterval(() => Math.floor(Math.random() * 12) + 1);
        newAnswer(interval);
        
    }

    function newAnswer(n) {
        if (n === 1) {
            setAnswer(() => "m2");
        } else if (n === 2) {
            setAnswer(() => "M2");
        } else if (n === 3) {
            setAnswer(() => "m3");
        } else if (n === 4) {
            setAnswer(() => "M3");
        } else if (n === 5) {
            setAnswer(() => "p4");
        } else if (n === 6) {
            setAnswer(() => "tt");
        } else if (n === 7) {
            setAnswer(() => "p5");
        } else if (n === 8) {
            setAnswer(() => "m6");
        } else if (n === 9) {
            setAnswer(() => "M6");
        } else if (n === 10) {
            setAnswer(() => "m7");
        } else if (n === 11) {
            setAnswer(() => "M7");
        } else if (n === 12) {
            setAnswer(() => "p8");
        }
        //Generate new notes
        newNotes();
    }

    function newNotes() {
        //Set N1 between 0-36 (No +1 because list of sounds goes from 0-36)
        if (ascending === "On" && descending === "On") {
            let randomChoice = Math.round(Math.random());
            if (randomChoice) {
                const n1 = Math.floor(Math.random() * (37 - interval));
                const n2 = n1 + interval
                setNote1(() => audioClips[n1].clip);
                setNote2(() => audioClips[n2].clip);
            } else if (!randomChoice) {
                const n1 = Math.floor(Math.random() * (37 - interval)) + interval;
                const n2 = n1 - interval
                setNote1(() => audioClips[n1].clip);
                setNote2(() => audioClips[n2].clip);
            }
        } else if (ascending === "On") {
            const n1 = Math.floor(Math.random() * (37 - interval));
            const n2 = n1 + interval
            setNote1(() => audioClips[n1].clip);
            setNote2(() => audioClips[n2].clip);
        } else if (descending === "On") {
            const n1 = Math.floor(Math.random() * (37 - interval)) + interval;
            const n2 = n1 - interval
            setNote1(() => audioClips[n1].clip);
            setNote2(() => audioClips[n2].clip);
        }
        //Check whether notes will be played melodically or harmonically
        melOrHarm();
    }

    //Randomly choose melodic or harmonic if both are checked
    //Otherwise sets to melodic or harmonic
    function melOrHarm() {
        if (melodic === "On" && harmonic === "On") {
            let randomChoice = Math.round(Math.random());
            if (randomChoice === 1) {
                setMelodicOrHarmonic(() => true);
            } else {
                setMelodicOrHarmonic(() => false);
            }
        } else if (melodic === "On") {
            setMelodicOrHarmonic(() => true);
        } else if (harmonic === "On") {
            setMelodicOrHarmonic(() => false);
        }
    }



    function playInterval() {
        if (melodic === "Off" && harmonic === "Off") {
            alert("Must have Melodic or Harmonic selected...")
        } else if (ascending === "Off" && descending === "Off") {
            alert("Must have Ascending or Descending selected...")
        } else {
            if (melodicOrHarmonic === true) {
                const first_note = new Audio(note1);
                first_note.play();
                setTimeout(() => {
                    const second_note = new Audio(note2);
                    second_note.play();
                }, 1000);
            } else if (melodicOrHarmonic === false) {
                const first_note = new Audio(note1);
                first_note.play();
                const second_note = new Audio(note2);
                second_note.play();
            }
        }
    }

    //Function for logging what is written in input
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function check_answer() {
        if (inputText === answer) {
            //Get a new set of notes/interval/answers - they are chained together
            newInterval();
            
            //Reset counter
            setCount(4);
            setInputText("");
            setGotAnswer(true);
                setTimeout(() => {
                    setGotAnswer(null);
                }, 1000);

        } else if (inputText !== answer) {
            setCount(() => count - 1);
            setInputText("");
            setGotAnswer(false);
                setTimeout(() => {
                    setGotAnswer(null);
                }, 1000);

        if (count === 1) {
            newInterval();
    
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
            <button className={styles.btnShowSettings} onClick={() => setDisplaySettings(prevValue => !prevValue)}>Settings</button>
                <div className={ displaySettings ? styles.settingsContainer: styles.hidden}>
                    <button className={styles.btnSettings} id="ascending" onClick={settings} >Ascending: {ascending}</button>
                    <button className={styles.btnSettings} id="descending" onClick={settings} >Descending: {descending}</button>
                    <button className={styles.btnSettings} id="melodic" onClick={settings} >Melodic: {melodic}</button>
                    <button className={styles.btnSettings} id="harmonic" onClick={settings} >Harmonic: {harmonic}</button>
                </div>
            <button className={styles.btn} onClick={playInterval}>Play Interval</button>
            <label className={styles.tries}>Tries: {count}</label>
            <div className={styles.answerContainer}>
                <input className={styles.input} onChange={handleChange} type="text" value={inputText} />
                { gotAnswer === true ? <AiOutlineCheckCircle className={styles.correct} /> : null }
                { gotAnswer === false ? <AiOutlineCloseCircle className={styles.incorrect} /> : null }
            </div>
            <button className={styles.btn} type="submit" onClick={check_answer}>Guess</button>
            
            <Help />
            {/* <p>Cheat sheet:</p>
            <p>Note 1: {note1} Note 2: {note2}</p>
            <p>Interval: {interval} Answer: {answer}</p>
            <p>{melodicOrHarmonic}</p>
            <p>Ascending: {ascending} Descending: {descending}</p>
            <p>Melodic: {melodic} Harmonic: {harmonic}</p> */}
        </div>
    );
}

export default IntervalGame;