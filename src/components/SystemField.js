const SystemField = (props) => {

  const { system, dataPath, headerText } = props;
  
  /*

  render the fixed improvements w checkbox

  show options dropdown for remaining slots

  save selected options and checkbox value

  total the checked improvements for system count

  */

  return(
    <section className={dataPath}>
      <div className="flex">
        <label>{headerText}</label>
        <p>(system count here)</p>
      </div>
      <ul>
      {
        system?.data.map( (improvement, index) => {
          // console.log(improvement);
          const { fixed, labelText, name, value } = improvement;
          if (fixed) {
            return(
              <li>
                <input
                  checked={value}
                  name={name}
                  // onChange={handleChange}
                  type="checkbox"
                />
                <label htmlFor={name}>{labelText}</label>
              </li>
            )
          } else {
            return(
              <li>
                <input
                  checked={value}
                  name={name}
                  // onChange={handleChange}
                  type="checkbox"
                />
                <select name={name}>
                  <option value="">Empty slot</option>
                  {
                    system?.options.map( (option) => {
                      // console.log(option);
                      const optionName = option.split(" ").join("");
                      return(
                        <option value={optionName}>{option}</option>
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