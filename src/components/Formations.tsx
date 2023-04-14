import { useState } from "react"
import Form from "./Form"
import { FormationProps } from "../utils/interfaces"

const Formations: React.FC<FormationProps> = ({ formations, setFormations }) => {
  const [showForm, setShowForm] = useState<boolean>(false)

  const formQuestions = ["nom de la formation", "date de début", "date de fin", "contenu de la formation"]

  const handleClick = () => {
    setShowForm(true)
  }

  const handleDelete = (index: number) => {
    setFormations(current => current.filter((formation, i) => i !== index))
  }

  return (
    <section className='ref'>

        <h3>Formations</h3>
        <button onClick={handleClick} >EDITER</button>

      {formations.map((formation, index) => {
        return (
          <div key={index} onClick={() => handleDelete(index)} className='pro__experience'>
             <div className='experience__date'>
                  {formation["date de début"]} <br/>
                  {formation["date de fin"]}
                </div>
                <div>
            <h4 className='experience__title'>{formation["nom de la formation"]}</h4>

            <ul>
              <li>{formation["contenu de la formation"]}</li>
            </ul>
            </div>
          </div>
        )
      })}


      {showForm ? <Form variable={formations} setVariable={setFormations} setShowForm={setShowForm} formQuestions={formQuestions} addNew={true} /> : null}
    </section>
  )
}

export default Formations