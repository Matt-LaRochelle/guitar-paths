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
import dmin2 from './intervalDiagrams/intervalDiagramsDescending/dmin2.png';
import dmaj2 from './intervalDiagrams/intervalDiagramsDescending/dmaj2.png';
import dmin3 from './intervalDiagrams/intervalDiagramsDescending/dmin3.png';
import dmaj3 from './intervalDiagrams/intervalDiagramsDescending/dmaj3.png';
import dp4 from './intervalDiagrams/intervalDiagramsDescending/dp4.png';
import dtt from './intervalDiagrams/intervalDiagramsDescending/dtt.png';
import dp5 from './intervalDiagrams/intervalDiagramsDescending/dp5.png';
import dmin6 from './intervalDiagrams/intervalDiagramsDescending/dmin6.png';
import dmaj6 from './intervalDiagrams/intervalDiagramsDescending/dmaj6.png';
import dmin7 from './intervalDiagrams/intervalDiagramsDescending/dmin7.png';
import dmaj7 from './intervalDiagrams/intervalDiagramsDescending/dmaj7.png';
import dp8 from './intervalDiagrams/intervalDiagramsDescending/dp8.png';

import IntervalA from './IntervalA';
import IntervalD from './IntervalD';
import IntervalGame from './IntervalGame';


function Intervals() {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Intervals</h2>
            <p className={styles.p}>
                In learning to play the guitar, it is
                extremely beneficial to train your ear to 
                recognize intervals. Intervals are the building 
                blocks of music and provide the foundation for 
                understanding melody, harmony, and rhythm. By 
                training your ear to recognize intervals, you'll 
                be able to identify and play melodies by ear, 
                harmonize melodies, and improvise with ease. 
                Moreover, understanding intervals will help you 
                to transcribe music, which is essential for 
                developing your musicianship skills. It may seem 
                daunting at first, but with practice, identifying 
                intervals will become second nature, and you'll 
                unlock a whole new level of musical understanding 
                and creativity.
                {/* Learning to hear the distance between intervals is essential to ear training. 
                The best way I have learned to recognize the interval is by associating it with 
                a song. Here I have a song picked out for each interval of the octave, from a 
                half step (minor 2nd) all the way to the octave (perfect octave). If you like, 
                you can come up with your own songs from your own experiences, but these are 
                here to get you started. Study them regularly and use the game below to test 
                your skills! </p> */}
                </p>
                <h2 className={styles.h2}>Ascending Intervals</h2>
            <div className={styles.gridContainer}>
            <ul className={styles.grid}>
                <li className={styles.li}>
                    <IntervalA
                        interval="Minor 2nd"
                        song="Jaws"
                        id="1"
                        link="https://www.youtube.com/embed/2J6IA5T7RTs"
                        diagram={min2}
                        color="red"
                    />
                </li>
                <li className={styles.li}>
                    <IntervalA
                        interval="Major 2nd"
                        song="Happy Birthday"
                        id="2"
                        link="https://www.youtube.com/embed/HwOA917qJTs"
                        diagram={maj2}
                        color="orange"
                    />
                </li>
                <li className={styles.li}>
                    <IntervalA
                        interval="Minor 3rd"
                        song="Greensleeves"
                        id="3"
                        link="https://www.youtube.com/embed/wARiOb80Zr0"
                        diagram={min3}
                        color="yellow"
                    />
                </li>
                <li className={styles.li}>
                    <IntervalA
                        interval="Major 3rd"
                        song="Oh When The Saints"
                        id="4"
                        link="https://www.youtube.com/embed/2eUzdTF3P2M"
                        diagram={maj3}
                        color="lime"
                    />
                </li>
                <li>
                    <IntervalA
                        interval="Perfect 4th"
                        song="Wedding March"
                        id="5"
                        link="https://www.youtube.com/embed/5C5FOW2ekHo"
                        diagram={p4}
                        color="aqua"
                    />
                </li>
                <li>
                    <IntervalA
                        interval="Tritone"
                        song="The Simpsons"
                        id="6"
                        link="https://www.youtube.com/embed/YIKPpDSNjR0"
                        diagram={tt}
                        color="magenta"
                    />
                </li>
                <li>
                    <IntervalA
                        interval="Perfect 5th"
                        song="Star Wars"
                        id="7"
                        link="https://www.youtube.com/embed/JG5OsfOuEy0"
                        diagram={p5}
                        color="red"
                    />
                </li>
                <li>
                    <IntervalA
                        interval="Minor 6th"
                        song="Go Down Moses"
                        id="8"
                        link="https://www.youtube.com/embed/XU_GcxTZx8k"
                        diagram={min6}
                        color="orange"
                    />
                </li>
                <li>
                    <IntervalA
                        interval="Major 6th"
                        song="My Bonnie Lies Over The Ocean"
                        id="9"
                        link="https://www.youtube.com/embed/pTqc6EBwr8Y"
                        diagram={maj6}
                        color="yellow"
                    />
                </li>
                <li>
                    <IntervalA
                        interval="Minor 7th"
                        song="Somewhere"
                        id="10"
                        link="https://www.youtube.com/embed/HQ32cIGqgdE"
                        diagram={min7}
                        color="lime"
                    />
                </li>
                <li>
                    <IntervalA
                        interval="Major 7th"
                        song="Take On Me"
                        id="11"
                        link="https://www.youtube.com/embed/djV11Xbc914"
                        diagram={maj7}
                        color="aqua"
                    />
                </li>
                <li>
                    <IntervalA
                        interval="Perfect Octave"
                        song="Somewhere Over the Rainbow"
                        id="12"
                        link="https://www.youtube.com/embed/PSZxmZmBfnU"
                        diagram={p8}
                        color="magenta"
                    />
                </li>
            </ul>
            </div>
                <h2 className={styles.h2}>Descending Intervals</h2>
                <ul className={styles.grid}>
                    <li>
                        <IntervalD
                            interval="Minor 2nd: Für Elise"
                            id="1"
                            link="https://www.youtube.com/embed/q9bU12gXUyM"
                            diagram={dmin2}
                        />
                    </li>
                    <li>
                        <IntervalD
                            interval="Major 2nd: Mary Had a Little Lamb"
                            id="2"
                            link="https://www.youtube.com/embed/II2Ey4d9EdA"
                            diagram={dmaj2}
                        />
                    </li>
                    <li>
                        <IntervalD
                            interval="Minor 3rd: Hey Jude"
                            id="3"
                            link="https://www.youtube.com/embed/mQER0A0ej0M"
                            diagram={dmin3}
                        />
                    </li>
                    <li>
                        <IntervalD
                            interval="Major 3rd: Imperial March"
                            id="4"
                            link="https://www.youtube.com/embed/B_iFRoJJLzc"
                            diagram={dmaj3}
                        />
                    </li>
                    <li>
                        <IntervalD
                            interval="Perfect 4th: Oh Come All Ye Faithful"
                            id="5"
                            link="https://www.youtube.com/embed/z51apErmAuw"
                            diagram={dp4}
                        />
                    </li>
                    <li>
                        <IntervalD
                            interval="Tritone: Blue 7"
                            id="6"
                            link="https://www.youtube.com/embed/59aXJ8GvMYE"
                            diagram={dtt}
                        />
                    </li>
                    <li>
                        <IntervalD
                            interval="Perfect 5th: Flinstones"
                            id="7"
                            link="https://www.youtube.com/embed/2s13X66BFd8"
                            diagram={dp5}
                        />
                    </li>
                    <li>
                        <IntervalD
                            interval="Minor 6th: Fire Nation Theme"
                            id="8"
                            link="https://www.youtube.com/embed/hCL2pQ6R66o"
                            diagram={dmin6}
                        />
                    </li>
                    <li>
                        <IntervalD
                            interval="Major 6th: Nobody Knows the Trouble I've Seen"
                            id="9"
                            link="https://www.youtube.com/embed/SVKKRzemX_w"
                            diagram={dmaj6}
                        />
                    </li>
                    <li>
                        <IntervalD
                            interval="Minor 7th: Little Red's Fantasy"
                            id="10"
                            link="https://www.youtube.com/embed/Aj14kiJPUp4"
                            diagram={dmin7}
                        />
                    </li>
                    <li>
                        <IntervalD
                            interval="Major 7th: I Love You"
                            id="11"
                            link="https://www.youtube.com/embed/nXIXknT-iQ8"
                            diagram={dmaj7}
                        />
                    </li>
                    <li>
                        <IntervalD
                            interval="Perfect Octave: Willow, Weep For Me"
                            id="12"
                            link="https://www.youtube.com/embed/w82NHDRRGJ0"
                            diagram={dp8}
                        />
                    </li>
                </ul>
            <IntervalGame />

        </div>
    );
}

export default Intervals;