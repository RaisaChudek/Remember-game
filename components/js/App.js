import React, {Component} from "react";
import ReactDOM from "react-dom";
import "../sass/styles.scss";
import "./Card";

const App = () => {

    const cardsColors = ["red", "blue", "green", "yellow"]

    return (
        <div className="app" >
            <h2>Match 2 cards</h2>
            <Card
                id={1}
                width={100}
                height={100}
                back={"../images/back.jpeg"}
                front={`/images/bird.jpeg`}
                flipped={flipped.includes(1)}
                handleClick={()=>handleClick(1)}
                />
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"));