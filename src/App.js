import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import "./App.css"
import Homepage from './Pages/Homepage/Homepage';
import EventTasks from './Pages/EventTasks/EventTasks';
import AdminVolunteer from './Pages/Admin.Volunteer/Admin.Volunteer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
       <Route exact path="/">
          <Homepage></Homepage>
      </Route>
       <Route path="/homepage">
          <Homepage></Homepage>
      </Route>
       <Route path="/event">
          <EventTasks></EventTasks>
      </Route>
       <Route path="/adminvolunteer">
          <AdminVolunteer></AdminVolunteer>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
