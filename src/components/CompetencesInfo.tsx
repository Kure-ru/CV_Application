import { useState } from "react"
import Form from "./Form"
import { CompetencesProps } from "../utils/interfaces"

const CompetencesInfo = ({ skills, setSkills }: CompetencesProps) => {
  const [showForm, setShowForm] = useState<boolean>(false)

  const formQuestions: string[] = ["compétence"]

  const handleClick = () => {
    setShowForm(true)
  }

  const handleDelete = (index: number) => {
    setSkills(current => current.filter((skill, i) => i !== index))
  }

  return (
    <>
      <h3>Compétences</h3>
      <button onClick={handleClick}>AJOUTER</button>
      <ul>
        {skills
          .map((skill, index) => {
            return (
              <li onClick={() => handleDelete(index)} key={index}>{skill.compétence}</li>)
          })
        }
      </ul>
      {showForm ? <Form variable={skills} setVariable={setSkills} setShowForm={setShowForm} formQuestions={formQuestions} addNew={true} /> : null}
    </>

  )
}

export default CompetencesInfo