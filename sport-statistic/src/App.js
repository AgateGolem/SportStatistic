import React, { Component} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import CalendarLeague from "./components/calendarleague.component";
import CalendarComand from "./components/calendarcomand.component";
import Comands from "./components/comands.component";
import Leagues from "./components/leagues.component";

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Route path = "/" exact component = {Leagues}/>
          <Route path = "/comands/:id" component = {Comands}/>
          <Route path = "/calendarleague/:id" component = {CalendarLeague}/>
          <Route path = "/calendarcomand/:id" component = {CalendarComand}/>
        </div>
      </Router>
    );
  }
}

export default App;
