/*
*   a square on the games board
*/
function Square(props) {

  // return a button with value and on click property
  return (
    <button
      className="square"
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}

/*
*   the games board that the game is played on
*/
class Board extends React.Component {

  // render one square on the game board
  renderSquare(i) {
      return (
          <Square
            value={this.props.squares[i]} // value set to the square value at turn time
            onClick={() => this.props.onClick(i)}
          />
      );
  }

  // show the game board by rendering all squares
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}  
    
/*
*   controls the board game actions
*/
class Game extends React.Component {

  // constructor to set the game states
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null), // history of each game turn
      }],
      turnNumber: 0, // current game turn to display
      xIsNext: true, // player tracker
    };
  }

  // handle a click withing the game
  handleClick(i) {
    /*
    *   data should be immutable to make complex features easier to implement
    *   features such as object history, detecting changes, determining when to re-render, ect
    */
    const history = this.state.history.slice(0, this.state.turnNumber + 1);  // should always copy to advoid mutation
    const currentTurn = history[history.length - 1]; // get current game stage
    const squares = currentTurn.squares.slice(); // get the squares to copy the next move onto
    if (calculateWinner(squares) || squares[i]) // check game over
      return;

    squares[i] = this.state.xIsNext ? 'X' : 'O'; // set the square value according to whos turn it is
    this.setState({
      history: history.concat([{ // copy history
        squares: squares, // change turns to copy array
      }]),
      turnNumber: history.length, // up the turn number
      xIsNext: !this.state.xIsNext, // check players turn
    });
  }

  // jump to history
  jumpTo(step) {
    this.setState({
      turnNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  // diplay the game
  render() {
    const history = this.state.history; // get game history
    const currentTurn = history[this.state.turnNumber]; // get current turn to display
    const winner = calculateWinner(currentTurn.squares); // check game over for current turn

    // create change turn buttons
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    // determine winner or whos turn is next
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    // display tic tac toe game
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={currentTurn.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
  

// ================ HELPERS ================== \\

/*
* calculates the winner of the game
* does not count cats game
*/
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
