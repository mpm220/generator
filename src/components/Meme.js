import React from "react";
import Data from "../memeData"

export default function Meme() {
    const [meme, setMeme] = React.useState({ "topText":"", "bottomText":"", "randomImage":"http://i.imgflip.com/1bij.jpg"});
    const [allMemes, setAllMemes] = React.useState(Data.data.memes)
    console.log(allMemes)


    function getMeme(){
        const randomNumber = Math.floor(Math.random()*Data.data.memes.length);
        const newMemeURL = allMemes[randomNumber].url;
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                randomImage: newMemeURL
            }
        })
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
                <img src={meme.randomImage} style={{width:`${meme.width}px`, height:`${meme.height}px`}} />
            </form>
        </main>
    )
}