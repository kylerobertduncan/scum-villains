import database from '../firebase';
import { update, ref } from 'firebase/database';

const NumberField = (props) => {

  const { count, data, dataPath, labelText, name } = props;

  const handleChange = (e) => {
    const mainRef = ref(database, dataPath)
    const newData = { ...data };
    newData[name] = +e.target.value;
    return (
      update(mainRef, newData)
    )
  }

  const handleClick = (e) => {
    if (data[name] === +e.target.value) {
      const mainRef = ref(database, dataPath)
      const newData = { ...data };
      newData[name] = +e.target.value - 1;
      return (
        update(mainRef, newData)
      )
    }
  }

  if ( count === 1 ) {
    return (
      <div className={`${name} flex radioButtons`}>
        <h3>{labelText}</h3>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 1}
            className={data[name] >= 1 ? "filled" : null}
            id={`${name}1`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${name}1`}></label>
        </div>
      </div>
    )
  } else if ( count === 3 ) {
    return (
      <div className={`${name} flex radioButtons`}>
        <h3>{labelText}</h3>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 1}
            className={data[name] >= 1 ? "filled" : null}
            id={`${name}1`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${name}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 2}
            className={data[name] >= 2 ? "filled" : null}
            id={`${name}2`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${name}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 3}
            className={data[name] >= 3 ? "filled" : null}
            id={`${name}3`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={3}
          />
          <label className="fillBox" htmlFor={`${name}3`}></label>
        </div>
      </div>
    )
  } else if (count === 4) {
    return (
      <div className={`${name} flex radioButtons`}>
        <h3>{labelText}</h3>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 1}
            className={data[name] >= 1 ? "filled" : null}
            id={`${name}1`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${name}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 2}
            className={data[name] >= 2 ? "filled" : null}
            id={`${name}2`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${name}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 3}
            className={data[name] >= 3 ? "filled" : null}
            id={`${name}3`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={3}
          />
          <label className="fillBox" htmlFor={`${name}3`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 4}
            className={data[name] >= 4 ? "filled" : null}
            id={`${name}4`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={4}
          />
          <label className="fillBox" htmlFor={`${name}4`}></label>
        </div>
      </div>
    )
  } else if (count === 6) {
    return (
      <div className={`${name} flex radioButtons`}>
        <h3>{labelText}</h3>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 1}
            className={data[name] >= 1 ? "filled" : null}
            id={`${name}1`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${name}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 2}
            className={data[name] >= 2 ? "filled" : null}
            id={`${name}2`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${name}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 3}
            className={data[name] >= 3 ? "filled" : null}
            id={`${name}3`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={3}
          />
          <label className="fillBox" htmlFor={`${name}3`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 4}
            className={data[name] >= 4 ? "filled" : null}
            id={`${name}4`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={4}
          />
          <label className="fillBox" htmlFor={`${name}4`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 5}
            className={data[name] >= 5 ? "filled" : null}
            id={`${name}5`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={5}
          />
          <label className="fillBox" htmlFor={`${name}5`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 6}
            className={data[name] >= 6 ? "filled" : null}
            id={`${name}6`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={6}
          />
          <label className="fillBox" htmlFor={`${name}6`}></label>
        </div>
      </div>
    )
  } else if (count === 8) {
    return(
      <div className={`${name} flex radioButtons`}>
        <h3>{labelText}</h3>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 1}
            className={data[name] >= 1 ? "filled" : null}
            id={`${name}1`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${name}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 2}
            className={data[name] >= 2 ? "filled" : null}
            id={`${name}2`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${name}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 3}
            className={data[name] >= 3 ? "filled" : null}
            id={`${name}3`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={3}
          />
          <label className="fillBox" htmlFor={`${name}3`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 4}
            className={data[name] >= 4 ? "filled" : null}
            id={`${name}4`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={4}
          />
          <label className="fillBox" htmlFor={`${name}4`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 5}
            className={data[name] >= 5 ? "filled" : null}
            id={`${name}5`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={5}
          />
          <label className="fillBox" htmlFor={`${name}5`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 6}
            className={data[name] >= 6 ? "filled" : null}
            id={`${name}6`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={6}
          />
          <label className="fillBox" htmlFor={`${name}6`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 7}
            className={data[name] >= 7 ? "filled" : null}
            id={`${name}7`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={7}
          />
          <label className="fillBox" htmlFor={`${name}7`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data[name] === 8}
            className={data[name] >= 8 ? "filled" : null}
            id={`${name}8`}
            name={name}
            onChange={handleChange}
            onClick={handleClick}
            type="radio"
            value={8}
          />
          <label className="fillBox" htmlFor={`${name}8`}></label>
        </div>
      </div>
    )
  }
  
}

export default NumberField;