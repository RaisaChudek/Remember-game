import React from "react";
import {Card} from "./Card";

//
export function Board ({disabled,dimension,cards,flipped,handleClick,solved}) {

    return <div className="board" >

        {cards.map((card) =>(
            <Card
            key = {card.id}
            id={card.id}
            width={dimension / 4} //tu nastawiam szerokosc boarda
            height={dimension / 5}
            type={card.type}
            back={"../images/back3.jpg"}
            //front={"../images/bird.jpg"}
            flipped={flipped.includes(card.id)}
            handleClick={handleClick}
            disabled={disabled || solved.includes(card.id)}
            solved={solved.includes(card.id)}

        /> ))}
    </div>
}

