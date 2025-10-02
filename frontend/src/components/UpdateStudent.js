import React from 'react'
import { useState, useEffect  } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    // Charger les données existantes de l'étudiant
    useEffect
    (
        () => {
            console.log("ID reçu dans UpdateStudent:", id);
            axios.get(`http://localhost:8081/student/${id}`)
            .then(res => {
                setName(res.data.name);
                setEmail(res.data.email);
            })
            .catch(err => console.error("Erreur lors du fetch de l'étudiant :", err));
        }, 
        [id]
    );

    // Soumettre les données modifiées
    function handleSubmit(event) { //handle submit function for the form
        event.preventDefault(); 
        axios.put(`http://localhost:8081/update/${id}`, { name, email}) //methode post on create page form
        .then(res => {
            console.log('modification réussie:' ,res.data);
            navigate('/'); // après ajout, retour vers la liste
        })
        .catch(err => console.error("Erreur lors de l'update :", err));
    }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit} >
                <h2>Modifier un étudiant</h2>
                <div className='mb-2'>
                    <label htmlFor="name">Nom </label>
                    <input 
                        type="text" placeholder='Entrez votre nom' 
                        className='form-control' 
                        value={name}
                        onChange = {e => setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="email">Email </label>
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

export default UpdateStudent