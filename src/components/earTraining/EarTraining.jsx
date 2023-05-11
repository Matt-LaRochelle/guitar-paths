import React from "react";
import styles from './EarTraining.module.css';
import Single from './single_notes_game/Single';
import Intervals from "./intervals/Intervals";

function EarTraining(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ear Training</h1>
            <h3> Hello {props.user} </h3>
            <Single user={props.user} />
            <Intervals />
        </div>
    );
}

export default EarTraining;