import React from "react";
import PropTypes from "prop-types";
import {Card} from "./Card";

// funkcja do tworzenia
export function Board ({disabled,dimension,cards,flipped,handleClick}) {

    return <div className="board" >

        {cards.map((card) =>(
            <Card
            key = {card.id}
            id={card.id}
            width={dimension / 4.5 } //tu nastawiam szerokosc boarda
            height={dimension /4.5 }
            type={card.type}
            back={"../images/back.jpeg"}
            //front={"../images/bird.jpg"}
            flipped={flipped.includes(card.id)}
            handleClick={()=>handleClick(card.id)}
            disabled={disabled}
        /> ))}
    </div>
}

Board.propTypes = {
    disabled: PropTypes.bool.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}


