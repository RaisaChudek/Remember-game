import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function Card({handleClick,
                         id,
                         type,
                         flipped,
                         back,
                         height,
                         width,
                     disabled}) {

    return <div
        className={`flip-container ${
            flipped ? 'flipped' : ''}`}
        style={{width,height}}
        onClick={()=> disabled ? null : handleClick(id)}>

        <div className="flipper"><img style={{height,width}} className={flipped ? 'front' : 'back'} src={flipped ? `../images/${type}.jpg` : back}
        />
        </div>
    </div>
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    back: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width:PropTypes.number.isRequired,
}
