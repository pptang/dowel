import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Top from './components/Top/Top';
import Problem from './components/Problem/Problem';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <Problem />
      <Intro />
    </div>
  );
}

export default App;
