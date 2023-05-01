import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from './cre.module.css'

function CreateExercise() {

    const [exercise, setExercise] = useState({
        username: 'test user',
        description: '',
        duration: 0,
        date: new Date(),
        users: ['test user', 'test user2']
    });

    useEffect(() => {
        
    }, [])



    function handleChange(e) {
        const {name, value} = e.target;

        setExercise((prevValue) => {
            if (name === "username") {
                return {
                    username: value,
                    description: prevValue.description,
                    duration: prevValue.duration,
                    date: prevValue.date,
                    users: prevValue.users
                }
            } else if (name === "description") {
                return {
                    username: prevValue.username,
                    description: value,
                    duration: prevValue.duration,
                    date: prevValue.date,
                    users: prevValue.users
                }
            } else if (name === "duration") {
                return {
                    username: prevValue.username,
                    description: prevValue.description,
                    duration: value,
                    date: prevValue.date,
                    users: prevValue.users
                }
            } else if (name === "date") {
                return {
                    username: prevValue.username,
                    description: prevValue.description,
                    duration: prevValue.duration,
                    date: value,
                    users: prevValue.users
                }
            }
            console.log(exercise)
        })
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(exercise);
        }

    return (
        <div className={styles.container}>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Username: </label>
                    <select
                        required
                        name="username"
                        value={exercise.username}
                        onChange={handleChange}>
                            {
                                exercise.users.map((user) => {
                                    return <option
                                            key={user}
                                            value={user}>{user}
                                            </option>;
                                })
                            }
                        </select>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text"
                        required
                        name="description"
                        value={exercise.description}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label>Duration in minutes: </label> 
                    <input
                        type="text"
                        name="duration"
                        value={exercise.duration}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            name="date"
                            selected={exercise.date}
                            onChange={handleChange}
                            />
                    </div>
                </div>
                <div>
                    <input type="submit" value="Create Exercise Log" />
                </div>



            </form>
            
        </div>
    );
}

export default CreateExercise;













{/* <form onSubmit={onSubmit}>
                <div>
                    <label>Username: </label>
                    <select ref="userInput"
                        required
                        value={exercise.username}
                        onChange={onChangeUsername}>
                            {
                                exercise.users.map((user) => {
                                    return <option
                                            key={user}
                                            value={user}>{user}
                                            </option>;
                                })
                            }
                        </select>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text"
                        required
                        value={exercise.description}
                        onChange={onChangeDescription}
                        />
                </div>
                <div>
                    <label>Duration in minutes: </label> 
                    <input
                        type="text"
                        value={exercise.duration}
                        onChange={onChangeDuration}
                        />
                </div>
                <div>
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={exercise.date}
                            onChange={onChangeDate}
                            />
                    </div>
                </div>
                <div>
                    <input type="submit" value="Create Exercise Log" />
                </div>
            </form> */}