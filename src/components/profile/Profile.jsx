import React from "react";
import styles from './Profile.module.css';

function Profile(props) {
    const username = "This is my username"
    
    return (
        <div className={styles.container}>
            <h1>Profile</h1>
            <h2>Welcome {username}</h2>
            <button onClick={props.function2}>Log out</button>
            {/* <div className={styles.songs}>
                <div className={styles.mastered}>
                    <h2>Songs Mastered:</h2>
                    <ul>
                        <li>Song</li>
                        <li>Song</li>
                        <li>Song</li>
                    </ul>
                </div>
                <div className={styles.working}>
                    <h2>Currently Working:</h2>
                    <ul>
                        <li>Song</li>
                        <li>Song</li>
                        <li>Song</li>
                    </ul>
                </div>
                <div className={styles.dream}>
                    <h2>Dream Songs:</h2>
                    <ul>
                        <li>Song</li>
                        <li>Song</li>
                        <li>Song</li>
                    </ul>
                </div>
            </div> */}
            <div className={styles.gameScores} >
                <h1>Ear training high scores:</h1>
                <h2>Single notes: 12</h2>
                <h2>Intervals: 8</h2>
                <h2>Chords: 2</h2>
                <h2>Scales: 12</h2>
                <h2>Chord Progressions: 5</h2>
            </div>
            <div className={styles.log}>
                <h1>Practice Log:</h1>
                <h3>Week of 3/9/2023</h3>
                <ul>
                    <li>1234 90bpm</li>
                    <li>G C D Am chord switches</li>
                    <li>Song</li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;