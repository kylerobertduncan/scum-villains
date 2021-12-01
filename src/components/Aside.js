import AbilityField from "./AbilityField";
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
          {
            aside.specialAbilities?.map( (ability) => {
              const { cost, description, labelText, name, value } = ability;
              return (
                <AbilityField
                  cost={cost}
                  data={aside.specialAbilities}
                  dataPath={['aside', 'specialAbilities']}
                  description={description}
                  key={name}
                  labelText={labelText}
                  name={name}
                  value={value}
                />
              )
            })
          }
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