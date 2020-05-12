import React from "react";
import PropTypes from "prop-types";
import {Card} from "./Card";

export function Board ({cards,flipped,handleClick}) {

    return <div className="board" >

        {cards.map((card) =>(
            <Card
            key = {card.id}
            id={card.id}
            width={200}
            height={200}
            type={card.type}
            back={"../images/back.jpeg"}
            //front={"../images/bird.jpg"}
            flipped={flipped.includes(card.id)}
            handleClick={()=>handleClick(card.id)}
        /> ))}
    </div>
}

Board.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}


