import { useState } from "react"
import Form from "./Form"

const Competences = ({ skill, setSkill }) => {
    const [showForm, setShowForm] = useState(false)

    const formQuestions = ["compétence"]

    const handleClick = () => {
        console.log('click')
        setShowForm(true)
    }

  return (
    <>
    <div className='sub__title'>
            <h3>Compétences</h3>
            <button onClick={handleClick} >AJOUTER</button>
          </div>
          <ul>
            <li>{skill.compétence}</li>
          </ul>
          {showForm ?  <Form variable={skill} setVariable={setSkill} setShowForm={setShowForm} formQuestions={formQuestions}/> : null}
          </>
         
  )
}

export default Competences