import { useState } from "react";
import "../index.css";

const Tictacto = ({onClose}) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const winner = calculateWinner(board);

  const isTie = board.every((square) => square !== null) && !winner;
  const handleClick = (index) => {
    if (board[index] || winner || isTie) return;

    const newBoard = [...board];
    newBoard[index] = player ? "X" : "O";
    setBoard(newBoard);
    setPlayer(!player);
  };

  const handelReset = () => {
    setBoard(Array(9).fill(null));
    setPlayer(true);
  };

  return (
    <>
      <main className="main">
        <h1 className="heading">Tic Tac Toe</h1> 
        <div className="container">
          <div className="game">
            {board.map((value, index) => (
              <button
                key={index}
                className="box-item"
                onClick={() => handleClick(index)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="info">
          {winner ? (
            <p>Winner : {winner}</p>
          ) 
          : isTie ? (
            <p>It's a Tie!</p>
          ): (
            <p>Next Player:{player ? "X" : "O"}</p>
          )}
        </div>
        <button className="reset" onClick={handelReset}>
          Reset
        </button>
        <br/>
        <button className="reset" onClick={onClose}>
            Go Back
          </button>
      </main>
    </>
  );
};

const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default Tictacto;
