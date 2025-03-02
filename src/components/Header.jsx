import React from "react"

/**
 * Header component for the Meme Generator application.
 * Displays the logo, title, and project name.
 * 
 * @component
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {
    return (
        <header className="header">
            <img 
                src="./src/images/troll-face.png" 
                className="header--image"
                alt="Troll face logo"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}  
