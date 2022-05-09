import React from "react";
import pic from "../images/generator.jpg"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={pic} 
                className="header--image"
            />
            <h2 className="header--title">Caption Competition Generator</h2>
            <h4 className="header--project">A way to learn more about hooks/state</h4>
        </header>
    )
}