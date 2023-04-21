import React, { useEffect } from "react";
import styles from './IntervalA.module.css';
import audioClip from '../noteSounds/noteSounds';
import intervals from '../noteSounds/intervalSounds';
import Aos from 'aos';
import 'aos/dist/aos.css';


function IntervalA(props) {

    //Scrolling effects time
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    //Audio clips
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
        <div data-aos="fade-right" className={styles.li} style={{backgroundColor: props.color}}>
            <div className={styles.gridLeft}>
                <p  className={styles.p}>{props.interval}</p>
                <button className={styles.btn} id={props.id} onClick={intervalM}>Melodic</button>
                <button className={styles.btn} id={props.id} onClick={intervalH}>Harmonic</button>
                <button className={styles.btn} id={props.id} onClick={context}>Context</button>
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

export default IntervalA;