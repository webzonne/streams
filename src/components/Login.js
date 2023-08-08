import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const init = {
    email:'',
    pass:''
  }
  const [usuario, setUsuario] = useState(init)
  const [registro, setRegistro] = useState([])

  const navigate = useNavigate();
  // funciones

  const handleSubmit = (e)=>{
    e.preventDefault()
    // setPlataformas([...plataformas, usuarios]);
    navigate('/home');
  }

  const handleRegister = (e)=>{
    e.preventDefault()
    navigate('/registro');
  }

  const handlePass = (e)=>{
    e.preventDefault(e)
    navigate('/pass')
  }

  const handleChange = (e)=>{
    const {name, value} = e.target
  }

  return (
<div className="flex mt-12 h-screen justify-center items-center">
      <div className="content">
        <nav className="absolute top-2 right-0 left-0 mx-auto z-10 text-center">
          <a href="https://cupladiga.net/" rel="nofollow">
            <img
              className="max-w-none text-center mx-auto"
              width={"80px"}
              src="https://cupladiga.net/box-containt-assets/content-src/icono.png"
              alt="Cupladiga"
            />
          </a>
        </nav>
        <div className='relative border-2 rounded-md border-fuchsia-600 p-6'>
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
                    aria-label="Usuario"
                    onClick={handleChange}
                  />
                  <br />
                  <label htmlFor="inputPassword5" className="text-white ">
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    id="inputPassword5"
                    name="pass"
                    className="outline-none rounded-md h-8 border mt-2 w-full"
                    placeholder="*******"
                    aria-describedby="password"
                    onClick={handleChange}
                  />
                  <br />
                  <div onClick={handlePass} className="cursor-pointer text-white mb-4">Olvido de clave</div>
                  <div className="area-btn-form">
                    <button
                      className="bg-white rounded-md w-full py-2 text-fuchsia-600"
                      id="submit_btn"
                      name="submit_btn"
                    >
                      INGRESAR
                    </button>
                  </div>
                  <div onClick={handleRegister} className="cursor-pointer text-white text-center mt-2 mb-4">Registrarse</div>
                </form>
              </div>
            </div>
            </div>
        
      <p className='text-gray-500 text-center mt-4'>Explora todo lo que tenemos para ti</p>
      </div>
    </div>
  )
}
