import { useState } from "react"
import Form from "./Form"

const Competences = ({ skills, setSkills }) => {
  const [showForm, setShowForm] = useState(false)

  const formQuestions = ["compétence"]

  const handleClick = () => {
    setShowForm(true)
  }


  const handleDelete = (index:number) => {
    setSkills(current => current.filter((skill, i) => i !== index))
    }

  return (
    <>
      <div className='sub__title'>
        <h3>Compétences</h3>
        <button onClick={handleClick} >AJOUTER</button>
      </div>
      <ul>
        {skills
          .map((skill, index) => {
            return (
              <li onClick={() => handleDelete(index)} key={index}>{skill.compétence}</li>)
          })
        }

      </ul>
      {showForm ? <Form variable={skills} setVariable={setSkills} setShowForm={setShowForm} formQuestions={formQuestions} addNew={true}/> : null}
    </>

  )
}

export default Competences