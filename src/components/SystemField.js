import database from '../firebase';
import { update, ref } from 'firebase/database';

const SystemField = (props) => {

  const { system, dataPath, headerText } = props;

  /*

  render the fixed improvements w checkbox

  show options dropdown for remaining slots

  save selected options and checkbox value

  total the checked improvements for system count

  */

  const decapitalize = ([first, ...rest]) => {
    const newString = first.toLowerCase() + rest.join('');
    return (newString.split(' ').join(''))
  }
  
  const handleOptionChange = (e) => {
    // get new values
    const arrayIndex = +e.target.className;
    const newValue = e.target.value
    // build a new data array
    const newDataArr = [ ...system.data ]
    newDataArr[arrayIndex].labelText = newValue;
    if (newValue !== "") {
      newDataArr[arrayIndex].name = decapitalize(newValue);
    } else {
      newDataArr[arrayIndex].name = dataPath + arrayIndex;
      newDataArr[arrayIndex].value = false;
    }
    // put the array inside a data object
    const newDataObj = {
      data: newDataArr
    }
    // update the information in firebase
    const dataRef = ref(database, `main/${dataPath}`)
    return(
      update(dataRef, newDataObj)
    )
  }

  const handleChange = (e) => {
    // get relevant values
    // console.log(e.target.name, e.target.value);
    // build a new data array
    const newDataArr = [...system.data]
    // check data for appropriate match
    newDataArr.forEach( (improvement, index) => {
      // console.log(improvement);
      if (improvement.name === e.target.name) {
        if (improvement.labelText === "") {
          alert("Select an improvement before equipping!")
        } else {
          improvement.value = e.target.checked
          // console.log('changed at index', index);
          // console.log(system.data[index]);
          
        }
      }
    })
    const newDataObj = {
      data: newDataArr
    }

    const dataRef = ref(database, `main/${dataPath}`);
    return(
      update(dataRef, newDataObj)
    )
    // console.log(newDataArr);
  }

  return(
    <section className={`${dataPath} systems`}>
      <div className="flex">
        <label>{headerText}</label>
        <p>(system count here)</p>
      </div>
      <ul>
      {
        system?.data?.map( (improvement, index) => {
          // console.log(improvement);
          const { fixed, labelText, name, value } = improvement;
          if (fixed) {
            return(
              <li key={name}>
                <input
                  checked={value}
                  name={name}
                  onChange={handleChange}
                  type="checkbox"
                />
                <label htmlFor={name}>{labelText}</label>
              </li>
            )
          } else {
            return(
              <li key={name}>
                <input
                  checked={value}
                  name={name}
                  onChange={handleChange}
                  type="checkbox"
                />
                <select
                  className={index}
                  name={name}
                  onChange={handleOptionChange}
                  value={labelText}
                >
                  <option value="" >Empty slot</option>
                  {
                    system?.options.map( (option) => {
                      const optionName = decapitalize(option)
                      return(
                        <option key={optionName} value={option}>{option}</option>
                      )
                    })
                  }
                </select>
              </li>
            )
          }
        })
      }
      </ul>
    </section>
  )
}

export default SystemField;