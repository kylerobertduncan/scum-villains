import database from '../firebase';
import { update, ref } from 'firebase/database';

const Main = ({main}) => {

  // console.log(main);

  const handleChange = (field, value) => {
    const mainRef = ref(database, '/main')
    const newData = { ...main };
    newData[field] = value;
    return (
      update(mainRef, newData)
    )
  }

  const handleTextChange = (e) => {
    const fieldName = e.target.name;
    const newValue = e.target.value;
    handleChange(fieldName, newValue);
  }

  const handleValueChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  }

  if (!main) {
    return(
      <p>Please wait, loading . . .</p>
    )
  }

  return(
    <main>

      <section className="shipInfo">
        <div className="flex">
          <div className="flex column">
            <input type="text" name="designation" onChange={handleTextChange} value={main.designation} />
            <label htmlFor="">Designation</label>
          </div>
          <div className="flex column">
            <input type="text" name="reputation" onChange={handleTextChange} value={main.reputation} />
            <label htmlFor="">Crew Reputation</label>
          </div>
        </div>
        <label htmlFor="">Colours/Look</label>
        <input type="text" name="coloursLook" onChange={handleTextChange} value={main.coloursLook} />
      </section>

      <section className="crew">
        <div className="flex">
          <h3>Crew</h3>
          <div className="counterBar">
            <input type="radio" value={1} name="crew" className="slash" />
            <input type="radio" value={2} name="crew" className="slash" />
            <input type="radio" value={3} name="crew" className="slash" />
          </div>
        </div>
      </section>

      <section className="flex shipSize">
        <h3>Ship Size</h3>
        <p>Personal — <span className="bold">Freighter</span> — Corvette — Frigate — Dreadnought</p>
      </section>

      <section className="rules">
        <ul className="listStyle">
          <li>For each level of damage, mark a ship system.</li>
          <li>
            <p>Each downtime you don’t pay your ship’s upkeep, roll a die
              for each consecutive downtime you haven’t paid.</p>
            <ul>
              <li>1-3 No worries.</li>
              <li>4/5 Damage to a system, but it’s minor. You can rig a solution.</li>
              <li>6+ A system is badly damaged and must be repaired.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="credDebt flex">
        <div className="cred">
          <h4>Cred</h4>
          <input type="radio" name="cred" value={1} />
          <input type="radio" name="cred" value={2} />
          <input type="radio" name="cred" value={3} />
          <input type="radio" name="cred" value={4} />
        </div>
        <div className="debt">
          <h4>Debt</h4>
          <input type="radio" name="debt" value={1} />
          <input type="radio" name="debt" value={2} />
          <input type="radio" name="debt" value={3} />
          <input type="radio" name="debt" value={4} />
          <input type="radio" name="debt" value={5} />
          <input type="radio" name="debt" value={6} />
          <input type="radio" name="debt" value={7} />
          <input type="radio" name="debt" value={8} />
        </div>
      </section>

      <section className="gambits">
        <h3>Gambits</h3>
        <p className="smallText">Reset to 2 gambits at the start of every job</p>
        <input type="radio" name="gambits" value={1} />
        <input type="radio" name="gambits" value={2} />
        <input type="radio" name="gambits" value={3} />
        <input type="radio" name="gambits" value={4} />
        <input type="radio" name="gambits" value={5} />
        <input type="radio" name="gambits" value={6} />
        <input type="radio" name="gambits" value={7} />
        <input type="radio" name="gambits" value={8} />
      </section>

      <div className="upkeepSkips flex column">

        <section className="upkeep">
          <h3>Upkeep</h3>
          <input type="number" name="upkeep" />
          <label htmlFor="upkeep">(Systems + Crew) / 4</label>
          <p className="smallText">Paid at the start of every downtime</p>
          {/* downward pointing arrow */}
        </section>

        <section className="skips">
          <h4>Skips</h4>
          <input type="radio" name="skips" value={1} className="slash" />
          <input type="radio" name="skips" value={2} className="slash" />
          <input type="radio" name="skips" value={3} className="slash" />
          <input type="radio" name="skips" value={4} className="slash" />
        </section>

      </div>

    </main>
  )
}

export default Main;