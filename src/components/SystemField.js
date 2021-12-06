import { useEffect } from 'react';
import database from '../firebase';
import { update, ref } from 'firebase/database';

const SystemField = (props) => {

  const { system, dataPath, headerText, systemTally, setSystemTally } = props;

  /*

  render the fixed improvements w checkbox

  show options dropdown for remaining slots

  save selected options and checkbox value

  total the checked improvements for system count

  */

  useEffect( () => {
    let totalImprovements = 0;
    if (system) {
      system?.data?.forEach((improvement) => {
        if (improvement.value === true) {
          totalImprovements = totalImprovements + 1;
        }
      })
      const newCount = {
        count: totalImprovements
      }
      const dataRef = ref(database, `main/${dataPath}`)
      return (
        update(dataRef, newCount)
      )
    }
  }, [system])

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
    // build a new data array
    const newDataArr = [...system.data]
    // check data for appropriate match
    newDataArr.forEach( (improvement) => {
      // find this matching item in the data array
      if (improvement.name === e.target.name) {
        // check an improvement has been selected
        if (improvement.labelText === "") {
          alert("Select an improvement before equipping!")
        } else {
          // change the boolean value in the data to match
          improvement.value = e.target.checked
        }
      }
    })
    // create new data object
    const newDataObj = {
      data: newDataArr
    }
    // send new data object to firebase
    const dataRef = ref(database, `main/${dataPath}`);
    return(
      update(dataRef, newDataObj)
    )
  }

  return(
    <section className={`${dataPath} systems`}>
      <div className="flex">
        <label>{headerText}</label>
        {
          system ?
          <input type="number" name={`${dataPath}Count`} value={system.count} readOnly className="systemCount" />
          : null
        }
      </div>
      <ul>
      {
        system?.data?.map( (improvement, index) => {
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