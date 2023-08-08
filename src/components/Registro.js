import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/TaskContext';

export default function Register() {
    const { usuario, setUsuario, registro, setRegistro } = useGlobalContext();

    useEffect(() => {
        console.log(registro);
      }, [registro]);

  const navigate = useNavigate();
  // funciones  
  const handleSubmit = (e)=>{
    const user = usuario
    e.preventDefault()
    setRegistro([...registro, user]);
    localStorage.setItem('registro', JSON.stringify([...registro, usuario]))
    console.log(registro)
    // navigate('/');
  }

  const handleChange = (e)=>{
    const {name, value} = e.target
    setUsuario({...usuario, [name]:value})
    console.log(usuario)
  }
  
  return (
<div className="flex h-screen justify-center items-center">
      <div className="content">
        <nav className="text-center">
          <a href="https://cupladiga.net/" rel="nofollow">
            <img
              className="max-w-none text-center mx-auto"
              width={"80px"}
              src="https://cupladiga.net/box-containt-assets/content-src/icono.png"
              alt="Cupladiga"
            />
          </a>
        </nav>
        <div className='border-2 rounded-md border-fuchsia-600 p-6'>
        <p className="text-center mb-4 text-xl text-fuchsia-600">CUPLADIGA</p>
        <p className="text-center text-gray-500 text-sm mb-8">
          Accede a <b>Todos</b> nuestros servicios en un solo lugar.
        </p>
            <div className="bg-fuchsia-600 py-4 px-4 rounded-md">
              <div className="cajaform-in">
                <form
                  method="POST"
                  action="/"
                  id="login_form"
                  name="login_form"
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="inputPassword5" className="text-white mb-2">
                    Usuario
                  </label>
                  <br />
                  <input
                    className="outline-none rounded-md h-8 border my-2 w-full"
                    type="text"
                    name="email"
                    placeholder="Ingresa tu usuario"
                    aria-label="email"
                    onChange={handleChange}
                  />
                  <br />
                  <label htmlFor="inputPassword5" className="text-white ">
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    id="inputPassword5"
                    name="contrasena"
                    className="outline-none rounded-md h-8 border mt-2 w-full"
                    placeholder="*******"
                    aria-describedby="password"
                    onChange={handleChange}
                  />
                  <br />
                  
                  <div className="mt-4">
                    <button
                      className="bg-white rounded-md w-full py-2 text-fuchsia-600"
                      id="submit_btn"
                      name="submit_btn"
                    >
                      REGISTRARSE
                    </button>
                  </div>
                </form>
              </div>
            </div>
            </div>
        
      <p className='text-gray-500 text-center mt-4'>Explora todo lo que tenemos para ti</p>
      </div>
    </div>
  )
}
