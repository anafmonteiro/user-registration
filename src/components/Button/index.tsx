import React from "react";
import './style.scss'

interface ButtonProps  {
    buttonLabel: string
}

const Button = (props:ButtonProps) => {

    return(
        <button className="comeback-button">{props.buttonLabel}</button>
    )

}

export default Button