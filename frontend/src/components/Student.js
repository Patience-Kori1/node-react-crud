
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Student() {

  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => setStudent(res.data))
      .catch(err => console.error("Erreur lors du fetch :", err));
  }, []);

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <button to="/create" className='btn btn-success'>Ajouter</button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nom </th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((data, i) => (
                            <tr key={i}> 
                                <td>{data.name}</td>
                                <td>{data.email}</td>
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