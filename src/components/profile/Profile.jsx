import React from "react";
import styles from './Profile.module.css';

function Profile() {
    return (
        <div className={styles.container}>
            <h1>Profile</h1>
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
            <div className={styles.log}>
                <h2>Practice Log:</h2>
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