import React, { useState, useEffect } from "react";

/**
 * Meme component for generating random memes.
 * 
 * @returns {JSX.Element} The rendered Meme generator component.
 */
export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);

    /**
     * Fetch memes from the Imgflip API when the component mounts.
     * This function is asynchronous for better readability.
     */
    useEffect(() => {
        async function fetchMemes() {
            try {
                const response = await fetch("https://api.imgflip.com/get_memes");
                const data = await response.json();
                setAllMemes(data.data.memes);
            } catch (error) {
                console.error("Failed to fetch memes:", error);
            }
        }

        fetchMemes();
    }, []);

    /**
     * Get a random meme image from the fetched memes list.
     */
    function getMemeImage() {
        if (allMemes.length === 0) return;
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    /**
     * Handle text input change for top and bottom meme text.
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} event The input change event.
     */
    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
