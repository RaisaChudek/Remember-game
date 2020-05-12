import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import "../sass/styles.scss";
import {Board} from "./Board";
import initializeDeck from "./deck" ;

const App = () => {

    const [cards,setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [dimension, setDimension] = useState(400);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);

    useEffect(() =>{
        resizeBoard()
        setCards(initializeDeck())
    },[]);

    useEffect(()=> {
        const resizeListener = window.addEventListener('resize',resizeBoard)

        return () => window.removeEventListener('resize',resizeListener)
    })

    const handleClick = (id) => {
        setDisabled(true)
        setFlipped([...flipped, id]);
    }

    const resizeBoard = () => {
        setDimension(
            Math.min(
                document.documentElement.clientWidth,
                document.documentElement.clientHeight,
            ),
        )
    }

    return (
        <div className="app" >
            <h2>Match 2 cards</h2>
            <Board dimension={dimension} cards={cards} handleClick={handleClick} flipped={flipped} disabled={disabled} />

        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"));