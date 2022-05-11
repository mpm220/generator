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
    function handleChange(event){
        const {name,value} = event.target
        setMeme( prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    name="topText"
                    value={meme.topText}
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                />
                <button 
                    type="button"
                    className="form--button"
                    onClick={getMeme}
                >
                    Get a new Caption image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}