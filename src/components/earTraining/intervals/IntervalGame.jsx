import React, { useState } from "react";
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

    function settings(e) {
        if (e.target.id === "ascending") {
            if (ascending === "Off") {
                setAscending("On");
            } else if (ascending === "On") {
                setAscending("Off");
            } else {
                console.log(ascending);
            }
        } else if (e.target.id === "descending") {
            if (descending === "Off") {
                setDescending("On");
            } else if (descending === "On") {
                setDescending("Off");
            } else {
                console.log(descending);
            }
        } else if (e.target.id === "melodic") {
            if (melodic === "Off") {
                setMelodic("On");
            } else if (melodic === "On") {
                setMelodic("Off");
            } else {
                console.log(melodic);
            }
        } else if (e.target.id === "harmonic") {
            if (harmonic === "Off") {
                setHarmonic("On");
            } else if (harmonic === "On") {
                setHarmonic("Off");
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

    function newInterval() {
        //Set interval between 1-12
        //Then set the answer according to randomly chosen interval
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
                setNote1(audioClips[n1].clip);
                setNote2(audioClips[n2].clip);
            } else if (!randomChoice) {
                const n1 = Math.floor(Math.random() * (37 - interval)) + interval;
                const n2 = n1 - interval
                setNote1(audioClips[n1].clip);
                setNote2(audioClips[n2].clip);
            }
        } else if (ascending === "On") {
            const n1 = Math.floor(Math.random() * (37 - interval));
            const n2 = n1 + interval
            setNote1(audioClips[n1].clip);
            setNote2(audioClips[n2].clip);
        } else if (descending === "On") {
            const n1 = Math.floor(Math.random() * (37 - interval)) + interval;
            const n2 = n1 - interval
            setNote1(audioClips[n1].clip);
            setNote2(audioClips[n2].clip);
        } else {
            alert("Must have A or D on...")
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
                setMelodicOrHarmonic(true);
            } else {
                setMelodicOrHarmonic(false);
            }
        } else if (melodic === "On") {
            setMelodicOrHarmonic(true);
        } else if (harmonic === "On") {
            setMelodicOrHarmonic(false);
        } else {
            alert("Must have M or H on...")
        }
    }



    function playInterval() {
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
        console.log(interval);
        console.log(answer);
        console.log(note1);
        console.log(note2);
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
            setCount(count - 1);
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
            <button>Settings</button>
                <button id="ascending" onClick={settings} >Ascending: {ascending}</button>
                <button id="descending" onClick={settings} >Descending: {descending}</button>
                <button id="melodic" onClick={settings} >Melodic: {melodic}</button>
                <button id="harmonic" onClick={settings} >Harmonic: {harmonic}</button>

                {/* <label>Ascending</label>
                <input type="checkbox" id="ascending" onChange={settings} ></input>
                <label>Descending</label>
                <input type="checkbox" id="descending" onChange={settings} ></input>
                <label>Melodic</label>
                <input type="checkbox" id="melodic" onChange={settings} ></input>
                <label>Harmonic</label>
                <input type="checkbox" id="harmonic" onChange={settings} ></input> */}
                

            <button className={styles.btn} onClick={playInterval}>Play Interval</button>
            <label className={styles.tries}>Tries: {count}</label>
            <input className={styles.input} onChange={handleChange} type="text" value={inputText} />
            <button className={styles.btn} type="submit" onClick={check_answer}>Guess</button>
            { gotAnswer === true ? <AiOutlineCheckCircle className={styles.correct} /> : null }
            { gotAnswer === false ? <AiOutlineCloseCircle className={styles.incorrect} /> : null }
            <Help />
            <p>Cheat sheet:</p>
            <p>Note 1: {note1} Note 2: {note2}</p>
            <p>Interval: {interval} Answer: {answer}</p>
            <p>{melodicOrHarmonic}</p>
        </div>
    );
}

export default IntervalGame;