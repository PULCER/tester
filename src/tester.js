import React from 'react';
import { useState } from "react";

export function TesterMan() {
    const [eventOddsValue, setEventOddsValue] = useState([
        { title: "Event 1 = ", id: 0, value: "" },
        { title: "Event 2 = ", id: 1, value: "" },
        { title: "Event 3 = ", id: 2, value: "" },
        { title: "Event 4 = ", id: 3, value: "" },
        { title: "Event 5 = ", id: 4, value: "" },
        { title: "Event 6 = ", id: 5, value: "" },
        { title: "Event 7 = ", id: 6, value: "" },
        { title: "Event 8 = ", id: 7, value: "" },
    ])

    const handleEventChange = (e, id) => {
        eventOddsValue[id].value = e.target.value
        setEventOddsValue((prevState) => {
            return prevState
        })
    }

    const clear = () => {
        setEventOddsValue(
            [
                { title: "Event 1 = ", id: 0, value: "" },
                { title: "Event 2 = ", id: 1, value: "" },
                { title: "Event 3 = ", id: 2, value: "" },
                { title: "Event 4 = ", id: 3, value: "" },
                { title: "Event 5 = ", id: 4, value: "" },
                { title: "Event 6 = ", id: 5, value: "" },
                { title: "Event 7 = ", id: 6, value: "" },
                { title: "Event 8 = ", id: 7, value: "" },
            ])
    }

    const logit = () => {
        console.log(eventOddsValue)
    }

    return (
        <div>
            <div>
                {eventOddsValue.map((event) => (
                    <div key={event.id}>
                        <label>
                            {event.title}
                            <input
                                type="text"
                                name="name"
                                onChange={(e) => {
                                    handleEventChange(e, event.id)
                                }}>
                            </input>
                        </label>
                    </div>
                ))}
            </div>
            <button onClick={clear}>clear</button>
            <button onClick={logit}> LOG IT!</button>
        </div>
    )
}

