import { useEffect, useState } from 'react';

const UpkeepField = (props) => {

  const { labelText, main, name } = props;
  console.log(props);

  const [upkeep, setUpkeep] = useState(0);

  useEffect(() => {
    console.log('useEffect runs!');
    const systemsArr = ['comms', 'engines', 'hull', 'weapons']
    let totalSystems = 0;
    systemsArr.forEach((system) => {
      if (main[system]) {
        const toAdd = main[system].count
        totalSystems = totalSystems + toAdd;
      }
    })
    const systemsAndCrew = totalSystems + main.crew;
    // console.log(systemsAndCrew);
    if (systemsAndCrew) {
      const newUpkeep = Math.floor(systemsAndCrew / 4);
      // console.log(newUpkeep);
      setUpkeep(newUpkeep)
    }
  }, [main])

  return (
    <div className={`${name} flex radioButtons`}>
      <h3>{labelText}</h3>
      <div className="fillBoxDiv">
        <input
          checked={upkeep === 1}
          className={upkeep >= 1 ? "filled" : null}
          id={`${name}1`}
          name={name}
          readOnly
          type="radio"
          value={1}
        />
        <label className="fillBox" htmlFor={`${name}1`}></label>
      </div>
      <div className="fillBoxDiv">
        <input
          checked={upkeep === 2}
          className={upkeep >= 2 ? "filled" : null}
          id={`${name}2`}
          name={name}
          readOnly
          type="radio"
          value={2}
        />
        <label className="fillBox" htmlFor={`${name}2`}></label>
      </div>
      <div className="fillBoxDiv">
        <input
          checked={upkeep === 3}
          className={upkeep >= 3 ? "filled" : null}
          id={`${name}3`}
          name={name}
          readOnly
          type="radio"
          value={3}
        />
        <label className="fillBox" htmlFor={`${name}3`}></label>
      </div>
      <div className="fillBoxDiv">
        <input
          checked={upkeep === 4}
          className={upkeep >= 4 ? "filled" : null}
          id={`${name}4`}
          name={name}
          readOnly
          type="radio"
          value={4}
        />
        <label className="fillBox" htmlFor={`${name}4`}></label>
      </div>
      <div className="fillBoxDiv">
        <input
          checked={upkeep === 5}
          className={upkeep >= 5 ? "filled" : null}
          id={`${name}5`}
          name={name}
          readOnly
          type="radio"
          value={5}
        />
        <label className="fillBox" htmlFor={`${name}5`}></label>
      </div>
      <div className="fillBoxDiv">
        <input
          checked={upkeep === 6}
          className={upkeep >= 6 ? "filled" : null}
          id={`${name}6`}
          name={name}
          readOnly
          type="radio"
          value={6}
        />
        <label className="fillBox" htmlFor={`${name}6`}></label>
      </div>
    </div>
  )
  
}

export default UpkeepField;