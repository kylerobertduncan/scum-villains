import BooleanField from "./BooleanField";
import NumberField from "./NumberField";

const Aside = ({aside}) => {

  if (!aside) {
    return(
      <p>Please wait, loading...</p>
    )
  } else {
    
    return(
      <aside>
  
        <section className="specialAbilities">
          <h4>Special Abilities</h4>
          <ul>
            <li>
              <input type="checkbox" name="theGetaway" className="triangle" />
              <label htmlFor="theGetaway">The Getaway: </label>
              <p>You gain potency when you scramble or helm to avoid capture or run a blockade.When doing a delivery job, take +1d to
                the engagement roll.</p>
            </li>
            <li>
              <input type="checkbox" name="cargoEye" className="triangle" />
              <label htmlFor="cargoEye">Cargo Eye: </label>
              <p>Your crew gains +1 cred for smuggling or delivery jobs.Whenever you gather info you can always ask, “What is most
                valuable here?”</p>
            </li>
            <li>
              <input type="checkbox" name="fieldRepairs" className="triangle" />
              <label htmlFor="fieldRepairs">Field Repairs: </label>
              <p>You gain potency when repairing your ship while in space.If you spend a gambit on a rig roll, you gain +2d (instead of
                +1d).</p>
            </li>
            <li>
              <input type="checkbox" name="leverage" className="triangle" />
              <label htmlFor="leverage">Leverage: </label>
              <p>Your crew knows how to pull strings and cash in favors.When you lay low, instead of rolling you can take -1 status with
                a faction at Helpful (+1) or better to reduce your wanted level by 1, and set your heat to 0 in a system.</p>
            </li>
            <li>
              <input type="checkbox" name="justPassingThrough" className="triangle" />
              <label htmlFor="justPassingThrough">Just Passing Through: </label>
              <p>During payoff, take -1 heat.When your heat is 4 or less, you get +1d to deceive people when you pass yourselves off as
                ordinary citizens, and you still have two downtime activities even if you’re at War (-3) with any faction, as they have
                trouble locating you.</p>
            </li>
            <li>
              <input type="checkbox" name="homeCooking" className="triangle" />
              <label htmlFor="homeCooking">Home Cooking: </label>
              <p>Your whole crew gains Home Cooking as a vice.Right after a job, you may spend 1 cred and a downtime activity to cook
                for everyone, allowing the whole crew present to make a vice roll.If anyone overindulges, a fight erupts, and everyone
                gains 1 stress after the vice roll.Requires a galley module.</p>
            </li>
            <li>
              <input type="checkbox" name="problemSolvers" className="triangle" />
              <label htmlFor="problemSolvers">Problem Solvers: </label>
              <p>Each PC may add 1 action rating to helm, rig, or scramble (up to a max of 3).</p>
            </li>
            <li>
              <input type="checkbox" name="veteran" className="triangle" />
              <input type="checkbox" name="veteran" className="triangle" />
              <input type="checkbox" name="veteran" className="triangle" />
              <label htmlFor="veteran">Veteran: </label>
              <p>Choose a special ability from another source.</p>
            </li>
          </ul>
        </section>
  
        <section className="contacts">
          <h4>Contacts</h4>
          {
            aside.contacts?.map((contact) => {
              const { cost, labelText, name, value } = contact;
              return (
                <BooleanField
                  cost={cost}
                  data={aside.contacts}
                  dataPath={['aside', '', 'contacts']}
                  key={name}
                  labelText={labelText}
                  name={name}
                  value={value}
                />
              )
            })
          }
        </section>
    
        <section className="crewXP">
          <NumberField
            count={8}
            dataPath='/aside'
            labelText="Crew XP"
            name="crewXP"
            data={aside}
          />
          <p>At the end of each session, for each item below, mark 1 xp (or 2 xp instead if that item occurred multiple times).</p>
          <ul className="listStyle">
            <li>You executed a successful transport or smuggling operation.</li>
            <li>You contended with challenges above your current station.</li>
            <li>You bolstered your crew’s reputation or developed a new one.</li>
            <li>You expressed the goals, drives, inner conflict, or essential nature of the crew.</li>
          </ul>
        </section>
  
      </aside>
    )
  }
}

export default Aside;