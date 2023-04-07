import { useState } from "react"

import Form from "./Form"

const Langues = ({ languages, setLanguages }) => {

    const [showForm, setShowForm] = useState(false)
    const formQuestions = ["langue"]
    const addNew:boolean = true 
    const handleClick = () => {
        console.log('click')
        setShowForm(true)
    }

    console.log(languages.langue)
  return (
    <>
    <div className='sub__title'>
            <h3>Langues</h3>
            <button onClick={handleClick} >AJOUTER</button>
          </div>
            <ul>
                {Object.keys(languages).length >= 1 && languages.map((language:any) => {
                    return (
                        <li key={language.key}>{language.langue}</li>
                    )
                })}
               
            </ul>
            { showForm ? <Form variable={languages} setVariable={setLanguages} setShowForm={setShowForm} formQuestions={formQuestions} addNew={addNew}/> : null }
          </>
  )
}

export default Langues