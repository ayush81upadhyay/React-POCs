import {useState, Fragment, useEffect} from 'react'

const Timer = () => {

    const timeCalculator = () => {
        let hours = (new Date()).getHours();
        let minutes = (new Date()).getMinutes();
        let seconds = (new Date()).getSeconds();
        return `${hours}:${minutes}:${seconds}`
    }

    useEffect(()=>{
        const intervalId = setInterval(function(){setTimer(timeCalculator())}, 1000)

        return () => {clearInterval(intervalId)}
    })

    const [timer, setTimer] = useState(timeCalculator());

    return (
        <Fragment>
            <h2>Hi!, this is Timer</h2>
            <h1>The time is : {timer}</h1>
        </Fragment>
    )
}

export default Timer