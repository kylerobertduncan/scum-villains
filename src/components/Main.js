import BooleanField from './BooleanField';
import NumberField from './NumberField';
import SystemField from './SystemField';
import TextField from './TextField';
import UpkeepField from './UpkeepField';

const Main = ({main}) => {

  if (!main) {
    return(
      <p>Please wait, loading...</p>
    )
  } else {

    return (
      <main>

        <section className="shipInfo">
          <div className="flex">
            <TextField
              labelText="Designation"
              name="designation"
              data={main}
            />
            <TextField
              labelText="Crew Reputation"
              name="reputation"
              data={main}
            />
          </div>
          <TextField
            labelText="Colours/Look"
            name="coloursLook"
            data={main}
          />
        </section>

        <section className="flex shipSize">
          <label><h3>Ship Size: </h3></label>
          <p>Personal — <span className="bold">Freighter</span> — Corvette — Frigate — Dreadnought</p>
        </section>

        <div className="grid">

          <section className="rules">
            <ul className="listStyle">
              <li>For each level of damage, mark a ship system.</li>
              <li>
                <p>Each downtime you don’t pay your ship’s upkeep, roll a die
                  for each consecutive downtime you haven’t paid.</p>
                <ul className="smallText">
                  <li>1-3 No worries.</li>
                  <li>4/5 Damage to a system, but it’s minor. You can rig a solution.</li>
                  <li>6+ A system is badly damaged and must be repaired.</li>
                </ul>
              </li>
            </ul>
          </section>

          <div className="gridBox">
            
            <section className="gambits" title="Reset to 2 gambits at the start of every job">
              <NumberField
                count={8}
                dataPath='/main'
                labelText="Gambits"
                name="gambits"
                data={main}
              />
              {/* <p className="smallText">Reset to 2 gambits at the start of every job</p> */}
            </section>
            
            <section className="credDebt">
              <NumberField
                count={4}
                dataPath='/main'
                labelText="Cred"
                name="cred"
                data={main}
              />
              <NumberField
                count={8}
                dataPath='/main'
                labelText="Debt"
                name="debt"
                data={main}
              />
            </section>

            <section className="crew">
              <NumberField
                count={3}
                dataPath='/main'
                labelText="Crew"
                name="crew"
                data={main}
              />
            </section>

          </div>

          {/* <div className="flex systems"> */}
            <SystemField
              system={main.engines}
              dataPath="engines"
              headerText="Engines"
            />
            <SystemField
              system={main.hull}
              dataPath="hull"
              headerText="Hull"
            />
            <SystemField
              system={main.comms}
              dataPath="comms"
              headerText="Comms"
            />
            <SystemField
              system={main.weapons}
              dataPath="weapons"
              headerText="Weapons"
            />
          {/* </div> */}

          <section className="upkeepSkips flex column">
            <div className="upkeep" title="Systems + Crew) / 4">
              <UpkeepField
                labelText="Upkeep"
                name="upkeep"
                main={main}
              />
              {/* <div className="flex">
                <label><h3>Upkeep</h3></label>
                <input type="text" name="upkeep" value={upkeep} readOnly className="systemCount" />
              </div> */}
              {/* <p className="smallText">(Systems + Crew) / 4</p> */}
              <p className="smallText">Paid at the start of every downtime</p>
              {/* downward pointing arrow */}
            </div>
            <NumberField
              count={4}
              dataPath='/main'
              labelText="Skips"
              name="skips"
              data={main}
            />
          </section>
          
          <section className="contacts">
            <h4>Contacts</h4>
            {
              main.contacts?.map((contact) => {
                const { cost, labelText, name, value } = contact;
                return (
                  <BooleanField
                    cost={cost}
                    data={main.contacts}
                    dataPath={['main', '', 'contacts']}
                    key={name}
                    labelText={labelText}
                    name={name}
                    value={value}
                  />
                )
              })
            }
          </section>
        </div>

        <section className="upgrades">

          <div className="auxiliary">
            <h4>Auxiliary</h4>
          {
            main.upgrades?.auxiliary.map( (upgrade) => {
              const { cost, labelText, name, value } = upgrade;
              return(
                <BooleanField
                  cost={cost}
                  data={main.upgrades.auxiliary}
                  dataPath={['main', 'upgrades', 'auxiliary']}
                  key={name}
                  labelText={labelText}
                  name={name}
                  value={value}
                />
              )
            })
          }
          </div>

          <div className="training">
            <h4>Training</h4>
            {
              main.upgrades?.training.map((upgrade) => {
                const { labelText, name, value } = upgrade;
                return (
                  <BooleanField
                    data={main.upgrades.training}
                    dataPath={['main', 'upgrades', 'training']}
                    key={name}
                    labelText={labelText}
                    name={name}
                    value={value}
                  />
                )
              })
            }
          </div>

          <div className="shipGear">
            <h4>Ship Gear</h4>
            {
              main.upgrades?.shipGear.map((upgrade) => {
                const { labelText, name, value } = upgrade;
                return (
                  <BooleanField
                    data={main.upgrades.shipGear}
                    dataPath={['main', 'upgrades', 'shipGear']}
                    key={name}
                    labelText={labelText}
                    name={name}
                    value={value}
                  />
                )
              })
            }
          </div>

          <div className="crewGear">
            <h4>Crew Gear</h4>
            {
              main.upgrades?.crewGear.map((upgrade) => {
                const { labelText, name, value } = upgrade;
                return (
                  <BooleanField
                    data={main.upgrades.crewGear}
                    dataPath={['main', 'upgrades', 'crewGear']}
                    key={name}
                    labelText={labelText}
                    name={name}
                    value={value}
                  />
                )
              })
            }
          </div>

          <div className="special">
            <h4>Special</h4>
            {
              main.upgrades?.special.map((upgrade) => {
                const { cost, labelText, name, value } = upgrade;
                return (
                  <BooleanField
                    cost={cost}
                    data={main.upgrades.special}
                    dataPath={['main', 'upgrades', 'special']}
                    key={name}
                    labelText={labelText}
                    name={name}
                    value={value}
                  />
                )
              })
            }
          </div>

        </section>

      </main>
    )

  }
  
}

export default Main;