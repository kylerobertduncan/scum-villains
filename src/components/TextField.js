import database from '../firebase';
import { update, ref } from 'firebase/database';

const TextField = (props) => {

  const { data, labelText, name } = props;

  const handleChange = (e) => {
    const mainRef = ref(database, '/main')
    const newData = { ...data };
    newData[name] = e.target.value;
    return (
      update(mainRef, newData)
    )
  }

  return(
    <div className={name}>
      <label htmlFor={name}>{labelText}</label>
      <input
        name={name}
        onChange={handleChange}
        type="text"
        value={data[name] ? data[name] : ""}
      />
    </div>
  )
}

export default TextField;