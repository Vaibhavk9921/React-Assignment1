import { useState } from 'react';
import './App.css'
const Display = (props) => {
    return (
        <div>
            <p>{props.counter} </p>
        </div>
    )
}
const Button = (props) => {
    return (
        <div>
            <button onClick={props.handleEvent}>{props.text}</button>
        </div>
    )
}
const App = () => {
    const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 })
    const inrGood = () => {
        const newclicks = { ...clicks, good: clicks.good + 1 }
        setClicks(newclicks)
    }
    const inrBad = () => {
        const newclicks = { ...clicks, bad: clicks.bad + 1 }
        setClicks(newclicks)
    }
    const inrNeutral = () => {
        const newclicks = { ...clicks, neutral: clicks.neutral + 1 }
        setClicks(newclicks)
    }
    return (
        <div>
            <h1>give feedback</h1>
            <p>
                <Button handleEvent={inrGood} text="Good"></Button>
                <Button handleEvent={inrBad} text="Bad"></Button>
                <Button handleEvent={inrNeutral} text="Neutral"></Button></p>
            <h1>statistics</h1>
            <p>
                Good:<Display counter={clicks.good}></Display>
                Bad:<Display counter={clicks.bad}></Display>
                Neutral:<Display counter={clicks.neutral}></Display>
            </p>

        </div>
    )
}

export default App;