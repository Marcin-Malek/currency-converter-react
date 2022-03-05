import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    const months = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
    const weekdays = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    })

    return (
        <p className="clock">Dzisiaj jest {weekdays[time.getDay()]}, {time.getDate()} {months[time.getMonth()]}, {time.toLocaleTimeString()}</p>
    )
}

export default Clock;