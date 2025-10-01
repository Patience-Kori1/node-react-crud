import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateStudent() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) { //handle submit function for the form
        event.preventDefault(); 
        axios.post('http://localhost:8081/create', {name, email}) //methode post on create page form
        .then(res => {
            console.log('insertion réussi:' ,res.data);
            navigate('/'); // après ajout, retour vers la liste
        })
        .catch(err => console.error("Erreur lors de l'ajout :", err));
    }


  return (
     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit} >
                <h2>Ajouter Etudiant</h2>
                <div className='mb-2'>
                    <label htmlFor="">Nom </label>
                    <input 
                        type="text" placeholder='Entrez votre nom' 
                        className='form-control' 
                        value={name}
                        onChange = {e => setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email </label>
                    <input 
                        type="email" placeholder='Entrez votre email' className='form-control'
                        value={email}
                        onChange = {e => setEmail(e.target.value)} 
                    />
                </div>
                <button className='btn btn-success'>Soumettre</button>
            </form>
        </div>
    </div>
  )
}

export default CreateStudent