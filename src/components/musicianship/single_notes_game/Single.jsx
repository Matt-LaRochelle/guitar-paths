import React from "react";
import styles from './Single.module.css';
import sharps from '../../images/note-names-sharps.gif'
import flats from '../../images/note-names-flats.gif';

function Single() {
    return (
        <div>
            <h2>Notes on the Guitar</h2>
            <div>
                <h3>Sharps</h3>
                <img className={styles.sharps} src={sharps} alt="notes and sharp notes on guitar neck" />
                <h3>Flats</h3>
                <img className={styles.flats} src={flats} alt="notes and flat notes on guitar neck" />
            </div>
            <div className={styles.note_game}>
                <h3>Ear training game</h3>
                <button>Play note</button>
                <input></input>
            </div>
        </div>
    );
}

export default Single;