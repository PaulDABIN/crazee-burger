import React from 'react'

export default function Form({inputValue, handleSubmit, handleChange}) {

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <p>Connectez-vous</p>
            <input type="text" placeholder="Entrez un prénom...." value={inputValue} onChange={handleChange}/>
            <button type="submit">Accéder à l'espace</button>
      </form>
    )
}
