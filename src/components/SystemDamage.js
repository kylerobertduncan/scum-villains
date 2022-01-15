import database from '../firebase';
import { update, ref } from 'firebase/database';

const SystemDamage = (props) => {
  const { dataPath, labelText, systemData } = props;
  // console.log(props);

  const fullPath = `main/${dataPath}`;

  const handleChange = (e) => {
    const mainRef = ref(database, fullPath);
    const newData = {
      damage: +e.target.value
    }
    return(
      update(mainRef, newData)
    )
  }

  const handleClick = (e) => {
    console.log("Click handled!");
    if (systemData.damage === +e.target.value) {
      const mainRef = ref(database, fullPath);
      const newData = {
        damage: +e.target.value - 1
      }
      return (
        update(mainRef, newData)
      )
    }
  }

  if (systemData.max === 2) {
    return (
      <div className={`name flex radioButtons`}>
        <h3>{labelText}</h3>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 1}
            className={systemData.damage >= 1 ? "filled" : null}
            id={`${dataPath}1`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${dataPath}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 2}
            className={systemData.damage >= 2 ? "filled" : null}
            id={`${dataPath}2`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${dataPath}2`}></label>
        </div>
      </div>
    )

  } else if (systemData.max === 3) {
    return (
      <div className={`name flex radioButtons`}>
        <h3>{labelText}</h3>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 1}
            className={systemData.damage >= 1 ? "filled" : null}
            id={`${dataPath}1`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${dataPath}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 2}
            className={systemData.damage >= 2 ? "filled" : null}
            id={`${dataPath}2`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${dataPath}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 3}
            className={systemData.damage >= 3 ? "filled" : null}
            id={`${dataPath}3`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={3}
          />
          <label className="fillBox" htmlFor={`${dataPath}3`}></label>
        </div>
      </div>
    )

  } else if (systemData.max === 4) {
    return(
      <div className={`name flex radioButtons`}>
        <h3>{labelText}</h3>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 1}
            className={systemData.damage >= 1 ? "filled" : null}
            id={`${dataPath}1`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${dataPath}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 2}
            className={systemData.damage >= 2 ? "filled" : null}
            id={`${dataPath}2`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${dataPath}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 3}
            className={systemData.damage >= 3 ? "filled" : null}
            id={`${dataPath}3`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={3}
          />
          <label className="fillBox" htmlFor={`${dataPath}3`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 4}
            className={systemData.damage >= 4 ? "filled" : null}
            id={`${dataPath}4`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={4}
          />
          <label className="fillBox" htmlFor={`${dataPath}4`}></label>
        </div>
      </div>
    )

  } else if (systemData.max === 6) {
    return(
      <div className={`name flex radioButtons`}>
        <h3>{labelText}</h3>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 1}
            className={systemData.damage >= 1 ? "filled" : null}
            id={`${dataPath}1`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${dataPath}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 2}
            className={systemData.damage >= 2 ? "filled" : null}
            id={`${dataPath}2`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${dataPath}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 3}
            className={systemData.damage >= 3 ? "filled" : null}
            id={`${dataPath}3`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={3}
          />
          <label className="fillBox" htmlFor={`${dataPath}3`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 4}
            className={systemData.damage >= 4 ? "filled" : null}
            id={`${dataPath}4`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={4}
          />
          <label className="fillBox" htmlFor={`${dataPath}4`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 5}
            className={systemData.damage >= 5 ? "filled" : null}
            id={`${dataPath}5`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={5}
          />
          <label className="fillBox" htmlFor={`${dataPath}5`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 6}
            className={systemData.damage >= 6 ? "filled" : null}
            id={`${dataPath}6`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={6}
          />
          <label className="fillBox" htmlFor={`${dataPath}6`}></label>
        </div>
      </div>
    )

  } else if (systemData.max === 8) {
    return(
      <div className={`name flex radioButtons`}>
        <h3>{labelText}</h3>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 1}
            className={systemData.damage >= 1 ? "filled" : null}
            id={`${dataPath}1`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${dataPath}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 2}
            className={systemData.damage >= 2 ? "filled" : null}
            id={`${dataPath}2`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${dataPath}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 3}
            className={systemData.damage >= 3 ? "filled" : null}
            id={`${dataPath}3`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={3}
          />
          <label className="fillBox" htmlFor={`${dataPath}3`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 4}
            className={systemData.damage >= 4 ? "filled" : null}
            id={`${dataPath}4`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={4}
          />
          <label className="fillBox" htmlFor={`${dataPath}4`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 5}
            className={systemData.damage >= 5 ? "filled" : null}
            id={`${dataPath}5`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={5}
          />
          <label className="fillBox" htmlFor={`${dataPath}5`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 6}
            className={systemData.damage >= 6 ? "filled" : null}
            id={`${dataPath}6`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={6}
          />
          <label className="fillBox" htmlFor={`${dataPath}6`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 7}
            className={systemData.damage >= 7 ? "filled" : null}
            id={`${dataPath}7`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={7}
          />
          <label className="fillBox" htmlFor={`${dataPath}7`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={systemData.damage === 8}
            className={systemData.damage >= 8 ? "filled" : null}
            id={`${dataPath}8`}
            name={dataPath}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={8}
          />
          <label className="fillBox" htmlFor={`${dataPath}8`}></label>
        </div>
      </div>
    )
  }

}

export default SystemDamage;