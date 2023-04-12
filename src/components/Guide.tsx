import React from 'react'
import { useState } from 'react'

const Guide = () => {
    const [showGuide, setShowGuide] = useState(true)
    const handleClick = () => {
        setShowGuide(false)
    }
    if (showGuide){
    return(
        showGuide &&
       <div className='guide'>
            <h2>Bienvenue sur MonCVFacile !</h2>
            <ol>
                <li>Cliquez sur le bouton <span>+</span> pour ajouter les informations dans chaque catégorie.</li>
                <li>Appuyez sur le bouton <span>confirmez</span> pour fermer le formulaire.</li>
                <li>Pour supprimer un élément, cliquez sur lui.</li>
            </ol>
               <button onClick={handleClick}>commencer</button>
        </div>
    )
}}

export default Guide