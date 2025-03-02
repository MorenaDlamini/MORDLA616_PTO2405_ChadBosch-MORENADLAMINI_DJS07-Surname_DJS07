import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';

/**
 * Root component of the Meme Generator application.
 * Renders the Header and Meme components.
 * 
 * @component
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    );
}

export default App;
