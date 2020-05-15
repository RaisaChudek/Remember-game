import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import "../sass/styles.scss";
import {Board} from "./Board";
import initializeDeck from "./deck" ;
import {Timer} from "./Timer";


const App = () => {

    const [cards,setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [dimension, setDimension] = useState(400);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [show,setShow] = useState(false)

    useEffect(() =>{
        resizeBoard()
        setCards(initializeDeck())
    },[]);

    useEffect(()=>{
        loadImages()
    },cards);

    useEffect(()=> {
        const resizeListener = window.addEventListener('resize',resizeBoard)

        return () => window.removeEventListener('resize',resizeListener)
    });



    const handleClick = (id) => {
        setDisabled(true)
        if(flipped.length === 0){
            setFlipped([id])
            setDisabled(false)
    } else {
            if(sameCardClicked(id)) return
            setFlipped([flipped[0], id])
            if(isMatch(id)) {
                setSolved([...solved,flipped[0],id])
                resetCards()
            } else {
                setTimeout(resetCards,1000)
            }
        }}

    const sameCardClicked = (id) => flipped.includes(id);

    const resetCards = () => {
        setFlipped([])
        setDisabled(false)
    }

    const isMatch = (id) => {
        const clicked = cards.find((card) => card.id === id)
        const turned = cards.find((card) => flipped[0] === card.id)
        return clicked.type === turned.type
    }

    const loadImages = () =>
    {cards.map((card)=> {
        const src = `../images${card.type}.jpg`
        console.log(src)
        new Image().src = src
    })}

    const resizeBoard = () => {
        setDimension(
            Math.min(
                document.documentElement.clientWidth,
                document.documentElement.clientHeight,
            ),
        )
    }

    return (
        <div className="app">
            <h2 className="title">FIND ALL PAIRS</h2>
            <Timer dimension={dimension}
                   cards={cards}
                   handleClick={handleClick}
                   flipped={flipped}
                   disabled={disabled}
                   solved={solved} />
            <Board dimension={dimension}
                   cards={cards}
                   handleClick={handleClick}
                   flipped={flipped}
                   disabled={disabled}
                   solved={solved}
            />

        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"));