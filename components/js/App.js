import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import "../sass/styles.scss";
import {Board} from "./Board";
import initializeDeck from "./deck" ;

const App = () => {

    const [cards,setCards] = useState([]);

    const [flipped, setFlipped] = useState([]);

    useEffect(() =>{
        setCards(initializeDeck())
    },[]);

    const handleClick = (id) => {
        setFlipped([...flipped, id]);
    }

    return (
        <div className="app" >
            <h2>Match 2 cards</h2>
            <Board cards={cards} handleClick={handleClick} flipped={flipped}/>

        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"));