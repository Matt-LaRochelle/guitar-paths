import React, { useState } from "react";
import styles from './Game.module.css';
import jack from '../images/download.jpg';

function Game() {
    const main=document.querySelector(".main")
    const ball=document.querySelector(".ball")

    const [leftright, setLeftRight]=useState(Math.floor(Math.random()*2))
    const [right, setRight] = useState(leftright?true:false)

    const [updown, setUpDown]= useState(Math.floor(Math.random()*2))
    const [up, setUp] = useState(updown?true:false)
    let velocity=3

    let ballmove = setInterval(()=>{
        let ballbounds = ball.getBoundingClientRect()
        let boardbounds = main.getBoundingClientRect()
        let ballboundsleft = parseInt(ballbounds.left)
        let ballboundsright = parseInt(ballbounds.right)
        let ballboundstop = parseInt(ballbounds.top)
        let ballboundsbottom = parseInt(ballbounds.bottom)
        let balltop = Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("top")))
        let ballleft = Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("left")))

        if (right && up) {
            ball.style.top=balltop-velocity+"px"
            ball.style.left=ballleft+velocity+"px"
        }
        if (!right && up) {
            ball.style.top=balltop-velocity+"px"
            ball.style.left=ballleft-velocity+"px"
        }
        if (right && !up) {
            ball.style.top=balltop+velocity+"px"
            ball.style.left=ballleft+velocity+"px"
        }
        if (!right && !up) {
            ball.style.top=balltop+velocity+"px"
            ball.style.left=ballleft-velocity+"px"
        }

        if (ballboundstop <= boardbounds.top) {
            setLeftRight(Math.floor(Math.random()*2))
            setRight(leftright?true:false)
            setUp(false)
        }

        if (ballboundsbottom >= boardbounds.bottom) {
            setLeftRight(Math.floor(Math.random()*2))
            setRight(leftright?true:false)
            setUp(true)
        }

        if (ballboundsright >= boardbounds.right) {
            setUpDown(Math.floor(Math.random()*2))
            setUp(updown?true:false)
            setRight(false)
        }

        if (ballboundsleft <= boardbounds.left) {
            setUpDown(Math.floor(Math.random()*2))
            setUp(updown?true:false)
            setRight(true)
        }

    }, 1)

    return (
        <div className={styles.main}>
            <img className={styles.ball} src={jack} alt="Jack Black" />
        </div>
    );
}

export default Game;