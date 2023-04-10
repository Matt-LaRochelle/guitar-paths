import React from "react";
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


function Single() {

    function play_note() {
        const number = Math.floor(Math.random() * 37) + 1
        const s = "s";
        const file = s.concat(number);
        const note = new Audio(file);
        note.play();
    }


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
                <button onClick={play_note}>Play note</button>
                <input></input>
            </div>
        </div>
    );
}

export default Single;