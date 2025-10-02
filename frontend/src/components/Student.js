
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {

    const [student, setStudent] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => setStudent(res.data))
      .catch(err => console.error("Erreur lors du fetch :", err));
    }, []);

    const handleDelete = async (id) => {
        try {
            // Envoi d'une requête DELETE à l'API backend avec l'identifiant de l'étudiant
            const res = await axios.delete('http://localhost:8081/student/' + id);

            // Vérifie le résultat renvoyé par le backend : 
            // si 'affectedRows > 0', cela signifie qu'une ligne a bien été supprimée dans la base de données
            if (res.data.affectedRows > 0) {
                // Mise à jour du state local "student"
                // Ici on filtre le tableau pour enlever l'étudiant dont l'id correspond à celui supprimé
                setStudent(student.filter(s => s.id !== id));
            } else {
                // Si aucune ligne n’a été supprimée (par exemple ID inexistant), on envoie un message dans la console
                console.log('Aucun étudiant supprimé, vérifiez l\'ID');
            }
        } catch (err) {
            // Si une erreur survient (connexion, serveur, etc.), elle est affichée dans la console
            console.log("Erreur lors de la suppression :", err);
        }
    }


    return (
        <div className='d-flex bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Ajouter</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nom </th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((data, i) => (
                                <tr key={i}> 
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <Link to={`update/${data.id}`} className='btn btn-primary'> Modifier </Link>
                                        <button className='btn btn-danger ms-2' onClick={ e => handleDelete(data.id)}>Supprimer</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student