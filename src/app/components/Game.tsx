import React from 'react';
import Board from './Board';

// const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
// const [xIsNext, setXIsNext] = useState(true);

function Game(): JSX.Element {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;
