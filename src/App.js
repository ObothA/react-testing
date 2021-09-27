import './App.css';

import Congrats from './Congrats';
import GuessedWords from './GeussedWords';

function App() {
  return (
    <div data-test="component-app" className='container'>
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: 'trian',
            letterMatchCount: 3,
          },
          {
            guessedWord: 'agile',
            letterMatchCount: 1,
          },
          {
            guessedWord: 'party',
            letterMatchCount: 5,
          },
        ]}
      />
    </div>
  );
}

export default App;
