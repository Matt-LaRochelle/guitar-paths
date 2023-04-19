import React from "react";
import styles from './Interval.module.css';
import audioClip from '../noteSounds/noteSounds';
import intervals from '../noteSounds/intervalSounds';

function Interval(props) {

    const audioClips = audioClip;

    // Plays the two note interval
    function intervalM(e) {
        const note = new Audio(audioClips[5].clip);

        // Turn button ID into number for dynamic intervals
        let n = (5 + Number(e.target.id))
        note.play();
        setTimeout(() => {
            const note2 = new Audio(audioClips[n].clip);
            note2.play();
        }, 1000); 
    }

    function intervalH(e) {
        const note = new Audio(audioClips[5].clip);

        // Turn button ID into number for dynamic intervals
        let n = (5 + Number(e.target.id))
        note.play();
        const note2 = new Audio(audioClips[n].clip);
        note2.play();
    }

    // Plays brief clip of interval in context of song
    function context(e) {
        // Turn button ID into number for dynamic intervals
        let n = Number(e.target.id) - 1;
        const sample = new Audio(intervals[n].clip);
        sample.play();
    }


    return (
        <div className={styles.li} style={{backgroundColor: props.color}}>
            <div className={styles.gridLeft}>
                <p className={styles.p}>{props.interval}</p>
                <button className={styles.btn} id={props.id} onClick={intervalM}>Interval played melodically</button>
                <button className={styles.btn} id={props.id} onClick={intervalH}>Interval played harmonically</button>
                <button className={styles.btn} id={props.id} onClick={context}>Interval in context of song</button>
            </div>
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
            <img className={styles.diagram} src={props.diagram} alt="diagram" />
        </div>
    );
}

export default Interval;