import './styles/App.scss'
import Main from './components/Main';
import Aside from './components/Aside'
import dbRef from './firebase';
import { onValue } from 'firebase/database'
import { useEffect } from 'react';

function App() {

  useEffect( () => {
    onValue(dbRef, (data) => {
      console.log(data.val());
    })
  }, [dbRef])


  return (
    <div className="App">
      <Main />
      <Aside />
    </div>
  );
}

export default App;