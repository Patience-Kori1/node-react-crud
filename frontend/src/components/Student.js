
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
                                    <button className='btn btn-primary'> Modifier </button>
                                    <button className='btn btn-danger ms-2' >Supprimer</button>
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