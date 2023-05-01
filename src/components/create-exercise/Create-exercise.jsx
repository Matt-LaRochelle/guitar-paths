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
        users: ['test user']
    });

    useEffect(() => {
        
    }, [])

    function onChangeUsername(e) {
        setExercise({
            username: e.target.value
        });
    }

    function onChangeDescription(e) {
        setExercise({
            description: e.target.value
        });
    }

    function onChangeDuration(e) {
        setExercise({
            duration: e.target.value
        });
    }

    function onChangeDate(date) {
        setExercise({
            date: date
        });
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
            </form>
        </div>
    );
}

export default CreateExercise;