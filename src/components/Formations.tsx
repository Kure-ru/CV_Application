import { useState } from "react"
import Form from "./Form"

const Formations = ({ formations, setFormations }) => {
  const [showForm, setShowForm] = useState(false)

  const formQuestions = ["nom de la formation", "date", "contenu de la formation"]

  const handleClick = () => {
    console.log('click')
    setShowForm(true)
  }

  return (
    <section className='ref'>
      <div className='sub__title'>
        <h3>Formations</h3>
        <button onClick={handleClick} >EDITER</button>
      </div>
      <div className="pro__experience">
        <h4 className='experience__title'>{formations["nom de la formation"]}</h4>
        <p className='experience__date'>{formations.date}</p>
        <ul>
          <li>{formations["contenu de la formation"]}</li>
        </ul>
      </div>
      {showForm ? <Form variable={formations} setVariable={setFormations} setShowForm={setShowForm} formQuestions={formQuestions} /> : null}
    </section>
  )
}

export default Formations