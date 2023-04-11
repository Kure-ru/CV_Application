import { useState } from 'react';

const Form = ({ setShowForm, variable, setVariable, formQuestions, addNew }) => {
    const [input, setInput] = useState({})

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setShowForm(false)
        if (!addNew) {
            setVariable(input)
        }
    }

    const addToList = (e: any) => {
        const newObj = {}
        formQuestions.forEach((question) => {
            newObj[question] = input[question]
        });

        const updatedVariable = [...variable, newObj]; //ajouter newObject à la copie de variable 
        setVariable(updatedVariable)
        console.log(variable)
        setInput({})
    }

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value,
        })
        console.log(input)
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            {formQuestions.map((question, index) => {
                return (
                    <div key={index}>
                        <label>{question}</label>
                        <input onChange={handleInputChange} value={input[question] || ''} name={question}></input>
                    </div>)

            })}
            {addNew ? <button type='button' onClick={addToList}>+</button> : null}
            <button type="submit">CONFIRMER</button>
        </form>
    )
}


export default Form