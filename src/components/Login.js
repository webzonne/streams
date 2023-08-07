import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  // funciones
  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate('/home');
  }
  return (
    <div className='w-full flex justify-center items-center h-screen bg-black bg-opacity-50'>
      <form onSubmit={handleSubmit} className='w-8/12 sm:w-1/2 lg:w-1/4 bg-white rounded-sm shadow-2xl p-6'>
        <label>Usuario</label><br/>
        <input className='border' type='text' name='user'/><br/>
        <label>Contrasena</label><br />
        <input className='border' type='text' name='user'/><br/>
        <div className='mt-4'>
          <button className='bg-green-300 py-2 px-4'>Iniciar session</button>
        </div>
      </form>
    </div>
  )
}
