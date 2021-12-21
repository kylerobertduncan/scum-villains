import './styles/App.scss'
import Main from './components/Main';
import Aside from './components/Aside'
import database from './firebase';
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

function App() {

  const [ mainData, setMainData ] = useState({});
  const [ asideData, setAsideData ] = useState({});

  useEffect( () => {
    const dbRef = ref(database);
    onValue(dbRef, (data) => {
      setMainData(data.val().main)
      setAsideData(data.val().aside)
    })
  }, [])

  return (
    <div className="App">

      <header className="flex mediaFlex">
        <h1>Scum &amp; Villainy: <span className="light">the </span>Stable Orbit</h1>
        <p className="smallText shipDesc">Illicit Merchants, Smugglers, <br/>and Blockade Runners</p>
      </header>

      <div className="flex mediaFlex wrapper">
        <Main main={mainData}/>
        <Aside aside={asideData}/>
      </div>

    </div>
  );
}

export default App;