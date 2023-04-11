import { useState } from "react"
import Form from "./Form"

const Formations = ({ formations, setFormations }) => {
  const [showForm, setShowForm] = useState(false)

  const formQuestions = ["nom de la formation", "date", "contenu de la formation"]

  const handleClick = () => {
    setShowForm(true)
  }

  const handleDelete = (index: number) => {
    setFormations(current => current.filter((formation, i) => i !== index))
  }

  return (
    <section className='ref'>
      <div className='sub__title'>
        <h3>Formations</h3>
        <button onClick={handleClick} >EDITER</button>
      </div>
      {formations.map((formation, index) => {
        return (
          <div key={index} onClick={() => handleDelete(index)} className='pro__experience'>
            <h4 className='experience__title'>{formation["nom de la formation"]}</h4>
            <p className='experience__date'>{formation.date}</p>
            <ul>
              <li>{formation["contenu de la formation"]}</li>
            </ul>
          </div>
        )
      })}

      {showForm ? <Form variable={formations} setVariable={setFormations} setShowForm={setShowForm} formQuestions={formQuestions} addNew={true} /> : null}
    </section>
  )
}

export default Formations