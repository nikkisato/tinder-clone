import './App.css';
import Header from './Components/Header/Header';
import TinderCards from './Components/TinderCards/TinderCards';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route path='/chats'>
            <h1>I am Chat page</h1>
          </Route>
          <Route path='/'>
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>

      {/*Tinder Card*/}
      {/*Buttons below tinder cards*/}

      {/*Chats Screen*/}
      {/*Individual chat screen*/}
    </div>
  );
}

export default App;
