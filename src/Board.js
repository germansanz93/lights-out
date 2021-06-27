import React, { Component } from 'react';
import Cell from './Cell';
import {game, solution} from './helpers';
import './Board.css';

class Board extends Component {
  static defaultProps = {
    boardSize: game.length,
  }
  
  constructor(props){
    super(props);
    this.state = {
      cells: game,
      solution: solution,
      lightsRemaining: game.reduce((acc, el) => acc+el)
    }
    this.press = this.press.bind(this);
  }

  press(btnId){
    let newState = this.state;
    newState.cells[btnId] = !newState.cells[btnId];
    if(btnId - 1 >= 0 && btnId % 5 !== 0) newState.cells[btnId - 1] = !newState.cells[btnId - 1];
    if(btnId + 1 <= 24 && btnId % 5 !== 4) newState.cells[btnId + 1] = !newState.cells[btnId + 1];
    if(btnId - 5 >= 0) newState.cells[btnId - 5] = !newState.cells[btnId - 5];
    if(btnId + 5 <= 24) newState.cells[btnId + 5] = !newState.cells[btnId + 5];
    newState.lightsRemaining = newState.cells.reduce((acc, el) => acc+el)
    this.setState(newState)
  }

  render(){
    return(
      <div className='Board'>
        {this.state.lightsRemaining ? this.state.cells.map((el,idx) => <Cell press={this.press} value={el} key={idx} id={idx}/>) : <h2>You Win!</h2>}
      </div>
    )
  }
}

export default Board;