import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Top from './components/Top/Top';
import Problem from './components/Problem/Problem';
import Privacy from './components/Privacy/Privacy';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Header />
            <Top />
            <Problem />
            <Intro />
          </div>
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
