import React, { Component } from 'react';
import './Cell.css'

class Cell extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    this.props.press(this.props.id);
  }

  render(){
    return(
      <div onClick={this.handleClick} className={`Cell ${this.props.value ? 'on' : 'off'}`}>
      </div>
    )
  }
}

export default Cell;