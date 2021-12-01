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
      <div className={name}>
        <label htmlFor={name}>{labelText}</label>
        <input
          checked={data[name] === 1}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={1}
        />
      </div>
    )
  } else if ( count === 3 ) {
    return (
      <div className={name}>
        <label htmlFor={name}>{labelText}</label>
        <input
          checked={data[name] === 1}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={1}
        />
        <input
          checked={data[name] === 2}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={2}
        />
        <input
          checked={data[name] === 3}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={3}
        />
      </div>
    )
  } else if (count === 4) {
    return (
      <div className={name}>
        <label htmlFor={name}>{labelText}</label>
        <input
          checked={data[name] === 1}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={1}
        />
        <input
          checked={data[name] === 2}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={2}
        />
        <input
          checked={data[name] === 3}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={3}
        />
        <input
          checked={data[name] === 4}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={4}
        />
      </div>
    )
  } else if (count === 6) {
    return (
      <div className={name}>
        <label htmlFor={name}>{labelText}</label>
        <input
          checked={data[name] === 1}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={1}
        />
        <input
          checked={data[name] === 2}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={2}
        />
        <input
          checked={data[name] === 3}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={3}
        />
        <input
          checked={data[name] === 4}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={4}
        />
        <input
          checked={data[name] === 5}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={5}
        />
        <input
          checked={data[name] === 6}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={6}
        />
      </div>
    )
  } else if (count === 8) {
    return(
      <div className={name}>
        <label htmlFor={name}>{labelText}</label>
        <input
          checked={data[name] === 1}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={1}
        />
        <input
          checked={data[name] === 2}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={2}
        />
        <input
          checked={data[name] === 3}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={3}
        />
        <input
          checked={data[name] === 4}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={4}
        />
        <input
          checked={data[name] === 5}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={5}
        />
        <input
          checked={data[name] === 6}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={6}
        />
        <input
          checked={data[name] === 7}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={7}
        />
        <input
          checked={data[name] === 8}
          name={name}
          onChange={handleChange}
          onClick={handleClick}
          type="radio"
          value={8}
        />
      </div>
    )
  }
  
}

export default NumberField;