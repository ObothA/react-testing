import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import Congrats from './Congrats';
import GuessedWords from './GeussedWords';
import Input from './Input';
import { getSecretWord } from './actions';

import './App.css';

function App() {
  const success = useSelector(state => state.success);
  const guessedWords = useSelector(state => state.guessedWords);
  const secretWord = useSelector(state => state.secretWord);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSecretWord());
  }, [dispatch]);

  return (
    <div data-test="component-app" className='container'>
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Input success={success} secretWord={secretWord}/>
      <GuessedWords
        guessedWords={guessedWords}
      />
    </div>
  );
}

export default App;
