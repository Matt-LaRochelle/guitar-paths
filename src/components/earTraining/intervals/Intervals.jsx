import React from "react";
import styles from './Intervals.module.css';
import min2 from './intervalDiagrams/min2.png';
import maj2 from './intervalDiagrams/maj2.png';
import min3 from './intervalDiagrams/min3.png';
import maj3 from './intervalDiagrams/maj3.png';
import p4 from './intervalDiagrams/p4.png';
import tt from './intervalDiagrams/tt.png';
import p5 from './intervalDiagrams/p5.png';
import min6 from './intervalDiagrams/min6.png';
import maj6 from './intervalDiagrams/maj6.png';
import min7 from './intervalDiagrams/min7.png';
import maj7 from './intervalDiagrams/maj7.png';
import p8 from './intervalDiagrams/p8.png';
import Interval from './Interval';
import IntervalGame from './IntervalGame';


function Intervals() {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Ascending Intervals</h2>
            <ul>
                <li>
                    <Interval
                        interval="Minor 2nd: Jaws"
                        id="1"
                        link="https://www.youtube.com/embed/2J6IA5T7RTs"
                        diagram={min2}
                        color="red"
                    />
                </li>
                <li>
                    <Interval
                        interval="Major 2nd: Happy Birthday"
                        id="2"
                        link="https://www.youtube.com/embed/HwOA917qJTs"
                        diagram={maj2}
                        color="orange"
                    />
                </li>
                <li>
                    <Interval
                        interval="Minor 3rd: Greensleeves"
                        id="3"
                        link="https://www.youtube.com/embed/wARiOb80Zr0"
                        diagram={min3}
                        color="yellow"
                    />
                </li>
                <li>
                    <Interval
                        interval="Major 3rd: Oh When The Saints"
                        id="4"
                        link="https://www.youtube.com/embed/2eUzdTF3P2M"
                        diagram={maj3}
                        color="lime"
                    />
                </li>
                <li>
                    <Interval
                        interval="Perfect 4th: Wedding March"
                        id="5"
                        link="https://www.youtube.com/embed/5C5FOW2ekHo"
                        diagram={p4}
                        color="aqua"
                    />
                </li>
                <li>
                    <Interval
                        interval="Tritone: The Simpsons"
                        id="6"
                        link="https://www.youtube.com/embed/YIKPpDSNjR0"
                        diagram={tt}
                        color="blue"
                    />
                </li>
                <li>
                    <Interval
                        interval="Perfect 5th: Star Wars"
                        id="7"
                        link="https://www.youtube.com/embed/JG5OsfOuEy0"
                        diagram={p5}
                        color="magenta"
                    />
                </li>
                <li>
                    <Interval
                        interval="Minor 6th: Go Down Moses"
                        id="8"
                        link="https://www.youtube.com/embed/XU_GcxTZx8k"
                        diagram={min6}
                        color="red"
                    />
                </li>
                <li>
                    <Interval
                        interval="Major 6th: My Bonnie Lies Over The Ocean"
                        id="9"
                        link="https://www.youtube.com/embed/pTqc6EBwr8Y"
                        diagram={maj6}
                        color="orange"
                    />
                </li>
                <li>
                    <Interval
                        interval="Minor 7th: Somewhere"
                        id="10"
                        link="https://www.youtube.com/embed/HQ32cIGqgdE"
                        diagram={min7}
                        color="yellow"
                    />
                </li>
                <li>
                    <Interval
                        interval="Major 7th: Take On Me"
                        id="11"
                        link="https://www.youtube.com/embed/djV11Xbc914"
                        diagram={maj7}
                        color="lime"
                    />
                </li>
                <li>
                    <Interval
                        interval="Perfect Octave: Somewhere Over the Rainbow"
                        id="12"
                        link="https://www.youtube.com/embed/PSZxmZmBfnU"
                        diagram={p8}
                        color="aqua"
                    />
                </li>
            </ul>
            <IntervalGame />
            {/* <h4>Descending:</h4>
            <ul>
                <li>Minor 2nd: Für Elise</li>
                <li>Major 2nd: ???</li>
                <li>Minor 3rd: Hey Jude</li>
                <li>Major 3rd: Summertime</li>
                <li>Perfect 4th: Flinstones</li>
                <li>Tritone: ???</li>
                <li>Perfect 5th: Flinstones</li>
                <li>Minor 6th: ???</li>
                <li>Major 6th: ???</li>
                <li>Minor 7th: ???</li>
                <li>Major 7th: ???</li>
                <li>Perfect Octave: ???</li>
            </ul> */}
        </div>
    );
}

export default Intervals;