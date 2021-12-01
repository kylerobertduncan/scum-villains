const TextField = (props) => {

  const { className, labelText, name, value } = props;

  /*

  class
  name
  label

  */

  return(
    <div className={className}>
      <label htmlFor={name}>{labelText}</label>
      <input type="text" name={name} value={value} />
    </div>
  )
}