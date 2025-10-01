import React from 'react'

function CreateStudent() {
  return (
     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form>
                <h2>Ajouter Etudiant</h2>
                <div className='mb-2'>
                    <label htmlFor="">Nom </label>
                    <input type="text" placeholder='Entrez votre nom' className='form-control' 
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email </label>
                    <input type="email" placeholder='Entrez votre email' className='form-control' 
                    />
                </div>
                <button className='btn btn-success'>Soumettre</button>
            </form>
        </div>
    </div>
  )
}

export default CreateStudent