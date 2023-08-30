import React from 'react';
import './App.css';
import calculateWinner from './helpers/calculateWinners'
import Board from './components/board/Board'
import GameInfo from './components/game-info/GameInfo';
import Moves from './components/moves/Moves';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); //holds the game state history, including all previous moves
    const current = history[history.length - 1];  //current game state, obtained from the last item in the history array
    const squares = current.squares.slice();  //array shows individual squares of tic-tac-board, copy of the squares array from the current game state
    if (calculateWinner(squares) || squares[i]) {
      return      //moves not allowed bcz conditions renders true as per current squares or i index is already filled
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';   //when moves allowed 'X' || 'O' is assigning to squares[i]
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,          //toggling to switch between players 'X' || 'O'
    })
  }

  jumpTo(step) {   // represents the step number to which the game should jump in the history
    console.log(step)
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,   //when even xIsNext is true when odd number xIsNext is false
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)
    let status
    if (winner) {
      status = "Winner: " + winner;
    }
    else if (current.squares.every(square => square !== null)) {
      status = "Draw";
    } 
    else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <React.Fragment>
        <h1 style={{textAlign:'center'}}>Tic Tac Toe</h1>
        <section className="game">
            <GameInfo
              status={status}
              winner={winner}
              xIsNext={this.state.xIsNext}
            />
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
                jumpTo={(i) => this.jumpTo(i)}
              />
          
          <Moves
            history={this.state.history}
            jumpTo={(i) => this.jumpTo(i)}
          />
        </section>
      </React.Fragment>
    )
  }
}

export default App;
