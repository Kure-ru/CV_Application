import { useState } from "react"

const Competences = ({ skill, setSkill }) => {
    const [showForm, setShowForm] = useState(false)

    const handleClick = () => {
        console.log('click')
        setShowForm(true)
    }

  return (
    <>
    <div className='sub__title'>
            <h3>Skills</h3>
            <button onClick={handleClick} >AJOUTER</button>
          </div>
          <ul>
            <li>{skill.id}</li>
          </ul>
          {showForm ?  <Form skill={skill} setSkill={setSkill} setShowForm={setShowForm}/> : null}
          </>
         
  )
}

const Form = ({ setShowForm, skill, setSkill }) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(skill)
        setShowForm(false)
    }

    const updateProfile = (e: any) => {
        setSkill({
            ...skill,
            [e.target.name]: e.target.value
        })
        console.log(skill)
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div>
                <label >ajouter une compétence</label>
                <input onChange={updateProfile} name="id"></input>
            </div>
            <button type="submit">CONFIRMER</button>
        </form>
    )
}
export default Competences