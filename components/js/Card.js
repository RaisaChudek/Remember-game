import React, {Component} from "react";
import ReactDOM from "react-dom";


export function Card({handleClick,
                         id,
                         type,
                         flipped,
                         back,
                         height,
                         width,
                         disabled,
                         solved
                     }) {

    return <div
        className={`flip-container ${
            flipped ? 'flipped' : ''}`}
        style={{width,height}}
        onClick={()=> disabled ? null : handleClick(id)}>

        <div className="flipper"><img style={{height,width}} className={flipped ? 'front' : 'back'} src={flipped || solved ? `../images/${type}.jpg` : back}
        />
        </div>
    </div>
}

