import React from "react";
import styles from './Practice.module.css';

function Practice() {
    return (
        <div className={styles.container}>
            <h1>Practice tips</h1>
            <h2>Level 1</h2>
            <h4>Left hand:</h4>
            <ul>
                <li>Keep your fingers arched</li>
                <li>Play with tips of fingers</li>
                <li>Keep thumb pointed up</li>
                <li>Make every note ring</li>
            </ul>
            <h4>Right hand:</h4>
            <ul>
                <li>Hold pick between thumb and index finger</li>
                <li>Pluck strings down or up, not outwards</li>
                <li>When strumming go through all strings quickly and evenly</li>
                <li>Movement should be left to right on the wrist</li>
            </ul>
            <h4>Using a metronome</h4>
            <ul>
                <li>Start very slow (around 60bpm)</li>
                <li>Speed up the metronome by 10 bpm only when you can play a passage constistenly correct, with minimal effort</li>
                <li>Continue speeding up until you reach the desired tempo</li>
                <li>Be patient, progress tends to take anywhere from 3-20 dilligent practice sessions</li>
            </ul>
        </div>
    );
}

export default Practice;