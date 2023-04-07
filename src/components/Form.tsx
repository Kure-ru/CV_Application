import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const Form = ({ setShowForm, variable, setVariable, formQuestions, addNew }) => {
const [input, setInput] = useState({})

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setShowForm(false)
    }

    const updateProfile = (e: any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleAdd = (e:any) => {
        
        setVariable({
            ...variable,
            [uuidv4()]: input
        })
        console.log(variable)
    }


    if (!addNew) {
        return (
            <form method="post" onSubmit={handleSubmit}>
                {formQuestions.map((question, index) => {
                    return (
                        <div key={index}>
                            <label>{question}</label>
                            <input onChange={updateProfile} name={question}></input>
                        </div>)
                })}
                <button type="submit">CONFIRMER</button>
            </form>
        )
    }
    else {
        return (
            <form method="post" onSubmit={handleSubmit}>
                {formQuestions.map((question, index) => {
                    return (
                        <div key={index}>
                            <label>{question}</label>
                            <input onChange={updateProfile} name={question}></input>
                        </div>)
                })}
                <button type="button" onClick={handleAdd}>+</button><button type="submit">CONFIRMER</button>
            </form>
        )
    }
}


export default Form