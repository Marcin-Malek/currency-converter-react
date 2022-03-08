import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    })

    return (
        <p className="clock">Dzisiaj jest
        {" "} 
        {time.toLocaleString(undefined, {
            weekday: "long",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            day: "numeric",
            month: "long"
        })}</p>
    )
};

export default Clock;