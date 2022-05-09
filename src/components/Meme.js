import React from "react";
import Data from "../memeData"

export default function Meme() {
    const memeArray = Data.data.memes;
    const [meme, setMeme] = React.useState([]);


    function getMeme(){
        const randomNumber = Math.floor(Math.random()*memeArray.length);
        setMeme(memeArray[randomNumber]);
    }

    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    type="button"
                    className="form--button"
                    onClick={getMeme}
                >
                    Get a new Caption image 🖼
                </button>
                <img src={meme.url} style={{width:`${meme.width}px`, height:`${meme.height}px`}} />
            </form>
        </main>
    )
}