import React, {Component,useState,useEffect} from 'react';


export const Timer = ({disabled,dimension,cards,flipped,handleClick,solved}) => {

    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(0);
    const [textWin,setTextWin] = useState(false);
    const [textWelcome, setTextWelcome] = useState(true);

    const [seconds,setSeconds]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            const interval = setInterval(() => {
                setTime(prevState=> prevState+1)
                setIntervalId(interval)
                setTextWelcome(prevState => prevState = false)
            },1000)

            return () => clearInterval(interval);
        },4000)
        },[]
    )



   /* useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevState=> prevState+1)
            setIntervalId(interval)
        },1000)

        return () => clearInterval(interval);
    }, []);
*/

    /*do stopowania timera*/

    useEffect(()=> {
        if(solved.length === 20) {

            clearInterval(intervalId)
            setTextWin(true)
        }
    })

    const handleStop = () => {
        clearInterval(intervalId);
        setIntervalId(0);
    };

    const handleStart = () => {
        if(!intervalId) {
            const interval = setInterval(() => {

                setTime(prevState => prevState + 1)
                setIntervalId(interval)
                console.log(interval);
            }, 1000)
        }
    }

    if(textWin === true) return <h1 className="winTitle" >Congratulations! You won in {time.toLocaleString()}seconds!</h1>
    return (
        <>
            <div className="divTimer">
                <h1 className='timer' >You play {time.toLocaleString()} seconds </h1>
                <button className="button" onClick={handleStop} >Pause the game</button>
                <button onClick={handleStart}>Start</button>

            </div>
        </>
    )
}

