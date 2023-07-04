import { useState, useEffect } from 'react';
import './App.css';
import Deck from './components/Deck';
import FinalMessage from './components/FinalMessage';
import Main from './components/Main';
import Page from './components/Page';

function App() {
  const [page, setPage] = useState('main');
  const showAnswer = false;
  const [success, setSuccess] = useState(true);
  const [deck, setDeck] = useState([]);

  return (
    <div className="App">
      {page === 'main' && <Main setPage={setPage} setDeck={setDeck} />}
      {page !== 'main' && (
        <Page>
          {page === 'deck' && <Deck showAnswer={!showAnswer} setPage={setPage} setSuccess={setSuccess} deck={deck} setDeck={setDeck} />}
          {page === 'finalMessage' && <FinalMessage success={success} setPage={setPage} />}
        </Page>
      )}
      <div></div>
    </div>
  ); 
}

export default App;
