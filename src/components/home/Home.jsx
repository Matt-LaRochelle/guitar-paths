import React from "react";
import styles from './Home.module.css';
import jack from '../images/download.jpg';

function Home() {
    return (
        <div className={styles.container}>
            <h1>Welcome Cowards</h1>
            <img className={styles.img} src={jack} alt="Jack Black" />
            {/* <h2>This weeks performances:</h2>
            <h2>Random tab of the week:</h2>
            <h2>Random tip of the week:</h2>
            <h2>Coming soon:</h2> */}
        </div>
    );
}

export default Home;