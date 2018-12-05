import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from '@screen/Game';

function Menu(){
  <Router>
  <div>
    <ul>
      <li>
        <Link to="/">Game</Link>
      </li>
      <li>
        <Link to="/setting">Settings</Link>
      </li>
    </ul>

    <hr />

    <Route exact path="/" component={Game} />
    <Route path="/setting" component={Setting} />
  </div>
</Router>
}

export default Menu;
