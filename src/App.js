import './App.css';
import Header from './Components/Header/Header';
import TinderCards from './Components/TinderCards/TinderCards';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';
import ChatScreen from './Components/ChatScreen/ChatScreen';
import Chats from './Components/Chats/Chats';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
