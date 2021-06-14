import React, { Component} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import CalendarComand from "./components/calendarcomand.component";
import CalendarLeague from "./components/calendarleague.component";
import Comands from "./components/comands.component";
import Leagues from "./components/leagues.component";

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Route path = "/" exact component = {Leagues}/>
          <Route path = "/comands" component = {Comands}/>
          <Route path = "/calendarcomand" compoent = {CalendarComand}/>
          <Route path = "/calendarleague" component = {CalendarLeague}/>
        </div>
      </Router>
    );
  }
}

export default App;
