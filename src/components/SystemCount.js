const SystemCount = (props) => {

  const { count, data, labelText, name } = props;

  if ( count === 1 ) {
    return (
      <div className={`${name} flex radioButtons`}>
        <h3>{labelText}</h3>
        <div className="fillBoxDiv">
          <input
            checked={data === 1}
            className={data >= 1 ? "filled" : null}
            id={`${name}1`}
            name={name}
            readOnly
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
            checked={data === 1}
            className={data >= 1 ? "filled" : null}
            id={`${name}1`}
            name={name}
            readOnly
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${name}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 2}
            className={data >= 2 ? "filled" : null}
            id={`${name}2`}
            name={name}
            readOnly
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${name}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 3}
            className={data >= 3 ? "filled" : null}
            id={`${name}3`}
            name={name}
            readOnly
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
            checked={data === 1}
            className={data >= 1 ? "filled" : null}
            id={`${name}1`}
            name={name}
            readOnly
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${name}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 2}
            className={data >= 2 ? "filled" : null}
            id={`${name}2`}
            name={name}
            readOnly
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${name}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 3}
            className={data >= 3 ? "filled" : null}
            id={`${name}3`}
            name={name}
            readOnly
            type="radio"
            value={3}
          />
          <label className="fillBox" htmlFor={`${name}3`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 4}
            className={data >= 4 ? "filled" : null}
            id={`${name}4`}
            name={name}
            readOnly
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
            checked={data === 1}
            className={data >= 1 ? "filled" : null}
            id={`${name}1`}
            name={name}
            readOnly
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${name}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 2}
            className={data >= 2 ? "filled" : null}
            id={`${name}2`}
            name={name}
            readOnly
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${name}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 3}
            className={data >= 3 ? "filled" : null}
            id={`${name}3`}
            name={name}
            readOnly
            type="radio"
            value={3}
          />
          <label className="fillBox" htmlFor={`${name}3`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 4}
            className={data >= 4 ? "filled" : null}
            id={`${name}4`}
            name={name}
            readOnly
            type="radio"
            value={4}
          />
          <label className="fillBox" htmlFor={`${name}4`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 5}
            className={data >= 5 ? "filled" : null}
            id={`${name}5`}
            name={name}
            readOnly
            type="radio"
            value={5}
          />
          <label className="fillBox" htmlFor={`${name}5`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 6}
            className={data >= 6 ? "filled" : null}
            id={`${name}6`}
            name={name}
            readOnly
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
            checked={data === 1}
            className={data >= 1 ? "filled" : null}
            id={`${name}1`}
            name={name}
            readOnly
            type="radio"
            value={1}
          />
          <label className="fillBox" htmlFor={`${name}1`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 2}
            className={data >= 2 ? "filled" : null}
            id={`${name}2`}
            name={name}
            readOnly
            type="radio"
            value={2}
          />
          <label className="fillBox" htmlFor={`${name}2`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 3}
            className={data >= 3 ? "filled" : null}
            id={`${name}3`}
            name={name}
            readOnly
            type="radio"
            value={3}
          />
          <label className="fillBox" htmlFor={`${name}3`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 4}
            className={data >= 4 ? "filled" : null}
            id={`${name}4`}
            name={name}
            readOnly
            type="radio"
            value={4}
          />
          <label className="fillBox" htmlFor={`${name}4`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 5}
            className={data >= 5 ? "filled" : null}
            id={`${name}5`}
            name={name}
            readOnly
            type="radio"
            value={5}
          />
          <label className="fillBox" htmlFor={`${name}5`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 6}
            className={data >= 6 ? "filled" : null}
            id={`${name}6`}
            name={name}
            readOnly
            type="radio"
            value={6}
          />
          <label className="fillBox" htmlFor={`${name}6`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 7}
            className={data >= 7 ? "filled" : null}
            id={`${name}7`}
            name={name}
            readOnly
            type="radio"
            value={7}
          />
          <label className="fillBox" htmlFor={`${name}7`}></label>
        </div>
        <div className="fillBoxDiv">
          <input
            checked={data === 8}
            className={data >= 8 ? "filled" : null}
            id={`${name}8`}
            name={name}
            readOnly
            type="radio"
            value={8}
          />
          <label className="fillBox" htmlFor={`${name}8`}></label>
        </div>
      </div>
    )
  }
  
}

export default SystemCount;