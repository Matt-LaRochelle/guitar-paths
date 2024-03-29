import React, {useState} from "react";
import styles from './Queries.module.css';
import Entry from './Entry';

var data = require("../../songs.json");


function createEntry(songEntry) {
    return <Entry 
        key={songEntry.key}
        songName={songEntry.title}
        artistName={songEntry.artist}
    />
}

function Queries() {

    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch= (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log('search', searchTerm);
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.searchContainer}>
                    <div className={styles.searchInner}>
                        <input className={styles.input} type="text" placeholder="Search..."value={value} onChange={onChange} />
                        <button className={styles.button} onClick={()=>onSearch(value)}>Search</button>
                    </div>
                    <div className={styles.dropdown}>
                        {data
                            .filter(item => {
                                const searchTerm = value.toLowerCase();
                                const fullName = item.title.toLowerCase();

                                return (
                                    searchTerm && 
                                    fullName.startsWith(searchTerm) && 
                                    fullName !==searchTerm
                                );
                        })
                        .slice(0,7)
                        .map((item) => (
                            <div 
                                onClick={()=>onSearch(item.title)} 
                                className={styles.dropdownRow}
                                key={item.title}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        {/* <form>
            <input type="search" placeholder="search..."></input>
            <button type="submit" >Submit</button>
        </form>
            <h1>Search Results:</h1> */}
            {/* {data.map(createEntry)} */}




            <div className={styles.hide}>
            <p>ABCDEFU</p>
            <p>A Thousand Years</p>
            <p>About A Girl</p>
            <p>All My Favorite Songs</p>
            <p>All The Small Things</p>
            <p>Alone</p>
            <p>Babe I'm Gonna Leave You</p>
            <p>Backyard Boy</p>
            <p>Bad Habits</p>
            <p>Black Sheep</p>
            <p>Blackbird</p>
            <p>Blackbird Song</p>
            <p>Boulevard Of Broken Dreams</p>
            <p>Burn</p>
            <p>Come As You Are</p>
            <p>Crazy</p>
            <p>Crazy Little Thing Called Love</p>
            <p>Dandelions</p>
            <p>Down To The River To Pray</p>
            <p>Dragostea Din Te</p>
            <p>Electric Love</p>
            <p>Ettrick Lady</p>
            <p>Famous Blue Raincoat</p>
            <p>Feel Good Inc</p>
            <p>Fields Of Gold</p>
            <p>Firework</p>
            <p>First Love Late Spring</p>
            <p>Fix You</p>
            <p>Francis Forever</p>
            <p>Free</p>
            <p>Get Outta My Way</p>
            <p>Girls Like You</p>
            <p>Good Riddance</p>
            <p>Goodbye Yellow Brick Road</p>
            <p>Gorgeous</p>
            <p>Happy Birthday</p>
            <p>Havana</p>
            <p>Heart Attack</p>
            <p>Help I'm Alive</p>
            <p>Hey Soul Sister</p>
            <p>Hold Me While You Wait</p>
            <p>Hurt</p>
            <p>I Will Survive</p>
            <p>I'll Fly Away</p>
            <p>Imagine</p>
            <p>Immigrant Song</p>
            <p>It Ain't Me</p>
            <p>Knicking On Heavens Door</p>
            <p>Leave Out All The Rest</p>
            <p>Levitating</p>
            <p>Losing You</p>
            <p>Love Like You</p>
            <p>Love Me Do</p>
            <p>Lover</p>
            <p>Memories</p>
            <p>Midnight Train To Memphis</p>
            <p>Minestroni Macaroni</p>
            <p>Middle of Starting Over</p>
            <p>Minority</p>
            <p>Monody</p>
            <p>Mood</p>
            <p>More Of You</p>
            <p>Motion Sickness</p>
            <p>My Heart Will Go On</p>
            <p>My Immortal</p>
            </div>



        </div>
    );
}

export default Queries;