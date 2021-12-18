import database from '../firebase';
import { update, ref } from 'firebase/database';

const BooleanField = (props) => {

  const { cost, data, dataPath, labelText, name, value } = props;

  const handleChange = (e) => {
    const newData = [...data]
    newData.forEach( (option) => {
      if (option.name === e.target.name) {
        option.value = e.target.checked
      }
    })
    const newDataObj = {
      [dataPath[2]]: newData
    }

    const pathString = `/${dataPath[0]}/${dataPath[1]}`;
    const dataRef = ref(database, pathString)
    return (
      update(dataRef, newDataObj)
    )
    
  }

  if (cost === 3) {
    return (
      <div className={`${name} booleanDiv`}>
        {/* <input
          checked={value}
          id={name}
          name={name}
          onChange={handleChange}
          type="checkbox"
        />
        <input
          checked={value}
          id={name}
          name={name}
          onChange={handleChange}
          type="checkbox"
        /> */}
        <input
          checked={value}
          id={name}
          name={name}
          onChange={handleChange}
          type="checkbox"
        />
        <label className='checkbox' htmlFor={name}></label>
        <label className='checkbox' htmlFor={name}></label>
        <label className='checkbox' htmlFor={name}>{labelText}</label>
      </div>
    )
  } else if (cost === 2) {
    return (
      <div className={`${name} booleanDiv`}>
        {/* <input
          checked={value}
          id={name}
          name={name}
          onChange={handleChange}
          type="checkbox"
        /> */}
        <input
          checked={value}
          id={name}
          name={name}
          onChange={handleChange}
          type="checkbox"
        />
        <label className='checkbox' htmlFor={name}></label>
        <label className='checkbox' htmlFor={name}>{labelText}</label>
      </div>
    )
  } else  {
    return(
      <div className={`${name} booleanDiv`}>
        <input
          checked={value}
          id={name}
          name={name}
          onChange={handleChange}
          type="checkbox"
        />
        <label className='checkbox' htmlFor={name}>{labelText}</label>
      </div>
    )
  }
}

export default BooleanField;