import React, { Component, Fragment } from 'react';
import './style.scss';

class Game extends Component {

  
  
handleStone = () => {

}

  render () {
    return(
      <Fragment>
      <h2 className="title">Stone Paper and Scissors</h2>
      
      <div className="cards">
      <button className="stone" onclick={this.handleStone} >Piedra</button>
      <button className="paper" onclick={this.handlePaper} >Paper</button>
      <button className="cut" onclick={this.handlecut} >Cut</button>
      </div>
      </Fragment>
      )
    }
    
  }
  
  export default Game;
  