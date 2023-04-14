import { useState } from "react"
import Form from "./Form"
import { LanguageProps } from "../utils/interfaces"

const Langues = ({ languages, setLanguages }: LanguageProps) => {

  const [showForm, setShowForm] = useState(false)
  const formQuestions = ["langue"]
  const handleClick = () => {
    setShowForm(true)
  }

  const handleDelete = (index:number) => {
    setLanguages(current => current.filter((language, i) => i !== index))
    }

  return (
    <>
        <h3>Langues</h3>
        <button onClick={handleClick} >AJOUTER</button>
      <ul>
        {languages
          .map((language, index) => {
            return (
              <li onClick={() => handleDelete(index)} key={index}>{language.langue}</li>)
          })
        }

      </ul>
      {showForm ? <Form variable={languages} setVariable={setLanguages} setShowForm={setShowForm} formQuestions={formQuestions} addNew={true} /> : null}
    </>
  )
}

export default Langues