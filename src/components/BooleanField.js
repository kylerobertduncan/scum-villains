import database from '../firebase';
import { update, ref } from 'firebase/database';

const BooleanField = (props) => {

  const { data, dataPath, labelText, name, value } = props;

  const handleChange = (e) => {
    const newData = [...data]
    newData.forEach( (upgrade) => {
      if (upgrade.name === e.target.name) {
        upgrade.value = e.target.checked
      }
    })
    const newDataObj = {
      [dataPath[1]]: newData
    }
    
    const dataRef = ref(database, `/main/${dataPath[0]}`)
    return (
      update(dataRef, newDataObj)
    )
  }

  return(
    <div className={name}>
      <input
        checked={value}
        name={name}
        onChange={handleChange}
        type="checkbox"
      />
      <label htmlFor={name}>{labelText}</label>
    </div>
  )
}

export default BooleanField;