import { useState } from 'react';
import { FormProps } from '../utils/interfaces';

type InputObject = { [key: string]: any }
const Form = ({ setShowForm, variable, setVariable, formQuestions, addNew }: FormProps) => {
    const [input, setInput] = useState<InputObject>({})

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowForm(false)
        if (!addNew) {
            setVariable([input])
        } else {
            setVariable((prevVariable) => [...prevVariable, input])
        }
    }

    const addToList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const newObj: { [key: string]: any } = {}
        formQuestions.forEach((question) => {
            newObj[question] = input[question]
        });

        const updatedVariable = [...variable, newObj]; //ajouter newObject à la copie de variable 
        setVariable(updatedVariable)
        setInput({})
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value,
        })
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