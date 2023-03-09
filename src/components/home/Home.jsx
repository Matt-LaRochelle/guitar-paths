import React from "react";
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <h1>Welcome to the Stage</h1>
            <h2>This weeks performances:</h2>
            <h2>Random tab of the week:</h2>
            <h2>Random tip of the week:</h2>
            <h2>Coming soon:</h2>
        </div>
    );
}

export default Home;