import React from "react";
import styles from './Theory.module.css';
import sharps from '../images/note-names-sharps.gif';
import flats from '../images/note-names-flats.gif';
import chords from '../images/Open_chords_crop.png';
import pentatonics from '../images/5_pentatonic_patterns.png';
import major_scales from '../images/Major_Scale_Patterns.png';

function Theory() {
    return (
        <div className={styles.container}>
            <h1>Theory</h1>
            <h2 className={styles.notes}>Notes On The Guitar</h2>
            <div className={styles.notes}>
                <h3 className={styles.title}>Sharps</h3>
                <img className={styles.guitarDiagram} src={sharps} alt="notes and sharp notes on guitar neck" />
                <h3 className={styles.title}>Flats</h3>
                <img className={styles.guitarDiagram} src={flats} alt="notes and flat notes on guitar neck" />
            </div>
            <h2 className={styles.title}>String Names</h2>
            <h2 className={styles.title}>Reading Tabliture</h2>
            <h2 className={styles.title}>Reading Rhythms</h2>
            <h2 className={styles.title}>Intervals</h2>
            <h2 className={styles.title}>Chords</h2>
            <img className={styles.img} src={chords} alt="guitar chord diagrams" />
            <h2 className={styles.title}>Chord Progressions</h2>
            <h2 className={styles.title}>Pentatonic Scale Patterns</h2>
            <img className={styles.img} src={pentatonics} alt="pentatonic patterns" />
            <h2 className={styles.title}>Major Scale Patterns</h2>
            <img className={styles.img} src={major_scales} alt="major scales" />
            <h2 className={styles.title}>Keys and Key Signatures</h2>
            <h2 className={styles.title}>Circle of 5ths/4ths</h2>
            <h2 className={styles.title}>Modes</h2>
            <h2 className={styles.title}>Minor Scales</h2>
            <h2 className={styles.title}>Minor Scale Modes</h2>
            <h2 className={styles.title}>Minor Scale Chord Progressions</h2>
            <h2 className={styles.title}>Exotic Scales</h2>
        </div>
    );
}

export default Theory;