import React from "react";
import styles from './Queries.module.css';

function Entry(props) {
    return (
        <p className={styles.entry}>"{props.songName}" - {props.artistName}</p>
    );
}

export default Entry;