import React from "react";
import styles from './Home.module.css';
import jack from '../images/download.jpg';

function Home(props) {
    return (
        <div className={styles.container}>
            {/* <h1>Welcome Cowards</h1> */}
            <img className={styles.img} src={jack} alt="Jack Black" />
            {/* <h2>This weeks performances:</h2>
            <h2>Random tab of the week:</h2>
            <h2>Random tip of the week:</h2>
            <h2>Coming soon:</h2> */}
            <p onClick={props.function2} className={styles.disclaimer}>
                Please excuse the appearance of this website as it is currently 
                undergoing construction. As a novice coder, I am working 
                diligently to ensure that all aspects of this online interface are 
                seamlessly integrated, despite any potential bugs that may arise. 
                My dream has always been to create a platform that captures the 
                wealth of knowledge I have accumulated during my years studying and 
                teaching music and although it is a colossal undertaking for a 
                single individual to build, I am committed to steadily updating the site 
                over time. I hope that this space will prove to be a valuable resource
                to you on your musical journey!
            </p>
            <p className={styles.disclaimer}>- Matt</p>
        </div>
    );
}

export default Home;