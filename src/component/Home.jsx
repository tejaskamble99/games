
import { useState } from 'react';
import Tictacto from './Tictacto';

const Home = () => {

// const [isGame , setIsGames] = useState(false);
const [showGame, setShowGame] = useState(false);

const handleCardClick = () => {
  setShowGame(true); // Show the game
};
const handleBackToHome = () => {
    setShowGame(false); // Go back to the home screen
  };

  return (
    <div className="app-container">
      {!showGame ? (
        <div className="home-container">
          <h1>Welcome to the Game Zone</h1>
          <div className="card" onClick={handleCardClick}>
            <h2>Tic Tac Toe</h2>
            <p>Click to play the classic game of Tic Tac Toe!</p>
          </div>
        </div>
      ) : (
        <Tictacto onClose={handleBackToHome}/> // Render the game when the card is clicked
      )}
    </div>
  );
};

export default Home;
