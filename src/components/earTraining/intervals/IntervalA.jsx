import React, { useState } from "react";
import styles from './IntervalA.module.css';
import audioClip from '../noteSounds/noteSounds';
import intervals from '../noteSounds/intervalSounds';
import {AiOutlineExpand} from 'react-icons/ai';

function IntervalA(props) {
    const [expand, setExpand] = useState(false);

    function handleClick() {
        setExpand(!expand);
    }

    //Audio clips
    const audioClips = audioClip;

    // Plays the two note interval
    function intervalM(e) {
        const note = new Audio(audioClips[5].clip);

        // Turn button ID into number for dynamic intervals
        let n = (5 + Number(e.currentTarget.id))
        note.play();
        setTimeout(() => {
            const note2 = new Audio(audioClips[n].clip);
            note2.play();
        }, 1000); 
    }

    function intervalH(e) {
        const note = new Audio(audioClips[5].clip);

        // Turn button ID into number for dynamic intervals
        let n = (5 + Number(e.currentTarget.id))
        note.play();
        const note2 = new Audio(audioClips[n].clip);
        note2.play();
    }

    // Plays brief clip of interval in context of song
    function context(e) {
        // Turn button ID into number for dynamic intervals
        let n = Number(e.currentTarget.id) - 1;
        const sample = new Audio(intervals[n].clip);
        sample.play();
    }


    return (
        <div className={ expand ? styles.containerExpanded : styles.containerSmall}>

            <div className={ expand ? styles.hidden : styles.layoutSmall}>
                <div className={styles.text} id={props.id} onClick={intervalM} >
                    <h3 className={styles.intervalSmall}>{props.interval}</h3>
                    <p className={styles.song}>{props.song}</p>
                </div>
                <AiOutlineExpand onClick={handleClick} className={styles.expandBtn}/>
            </div>
            
            <div className={ expand ? styles.layoutExpanded : styles.hidden}>
                <div className={styles.expandedTitleBackground}>
                    <div className={styles.expandedTitle}>
                        <h2 className={styles.title}>{props.interval}</h2>
                        <p className={styles.song}>{props.song}</p>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.btnContainer}>
                        <button className={styles.btn} id={props.id} onClick={intervalM}>Melodic</button>
                        <button className={styles.btn} id={props.id} onClick={intervalH}>Harmonic</button>
                        <button className={styles.btn} id={props.id} onClick={context}>Context</button>
                    </div>
                    <img className={styles.diagram} src={props.diagram} alt="diagram" />
                    <iframe 
                        width="200" 
                        height="200" 
                        src={props.link} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        className={styles.video}
                        >
                    </iframe>
                </div>
                
                <AiOutlineExpand onClick={handleClick} className={styles.expandBtn2}/>
                
            </div>
            
        </div>
    );
}

export default IntervalA;