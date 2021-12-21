import database from '../firebase';
import { update, ref } from 'firebase/database';

const AbilityField = (props) => {

  const { cost, data, dataPath, description, labelText, name, value } = props;

  const handleChange = (e) => {
    const newData = [...data]
    newData.forEach( (option) => {
      if (option.name === e.target.name) {
        option.value = e.target.checked
      }
    })
    const newDataObj = {
      [dataPath[1]]: newData
    }

    const dataRef = ref(database, `/${dataPath[0]}`)
    return (
      update(dataRef, newDataObj)
    )
  }

  if (cost === 2) {
    return (
      <div className={name}>
        <input
          checked={value}
          name={name}
          onChange={handleChange}
          type="checkbox"
          id={name}
        />
        <label htmlFor={name} className='checkbox'></label>
        <label htmlFor={name} className='checkbox'>{labelText}: </label>
        <p>{description}</p>
      </div>
    )
  } else  {
    return(
      <div className={name}>
        <input
          checked={value}
          name={name}
          onChange={handleChange}
          type="checkbox"
          id={name}
        />
        <label htmlFor={name} className='checkbox'>{labelText}: </label>
        <p>{description}</p>
      </div>
    )
  }
}

export default AbilityField;