import './App.css';
import Card from './components/Card';
import FinalMessage from './components/FinalMessage';
import InitialPage from './components/InitialPage';
import Logo from './components/Logo';

function App() {
  const showAnswer = true;
  //<FinalMessage />
  //<Card showAnswer={!showAnswer} />
  return (
    <div className="App">
      <InitialPage />
      <div></div>
    </div>
  );
}

export default App;
