import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/TaskContext';
import Mensaje from '../components/Mensaje';

export default function Login() {
  const { registro } = useGlobalContext();
  const [showError, setShowError] = useState(false); 
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    contrasena: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
    console.log(credentials)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = registro.find(
      (user) =>
        user.email === credentials.email &&
        user.contrasena === credentials.contrasena
    );

    if (user) {
      navigate('/home');
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000); // Mostrar el mensaje de error durante 3 segundos
    }
  };
  const handlePass = ()=>{
    navigate('/pass')
  }


  return (
    <>
<div className="flex mt-12 h-screen justify-center items-center">

      <div className="content">
        <nav className="absolute top-2 right-0 left-0 mx-auto z-10 text-center">
          {/* <a href="https://cupladiga.net/" rel="nofollow"> */}
            <img
              className="max-w-none text-center mx-auto"
              width={"80px"}
              src="https://cupladiga.net/box-containt-assets/content-src/icono.png"
              alt="Cupladiga"
            />
          {/* </a> */}
        </nav>
        <div className='relative border-2 rounded-md border-fuchsia-600 p-6'>
        <p className="text-center mb-4 text-xl text-fuchsia-600">CUPLADIGA</p>
        <p className="text-center text-gray-500 text-sm mb-8">
          Accede a <b>Todos</b> nuestros servicios en un solo lugar.
        </p>
            <div className="bg-fuchsia-600 py-4 px-4 rounded-md">
              <div className="cajaform-in">
                <form
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
                    aria-label="usuario"
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
                  <div onClick={handleSubmit} className="cursor-pointer text-white text-center mt-2 mb-4">Registrarse</div>
                </form>
              </div>
            </div>
            </div>
        
      <p className='text-gray-500 text-center mt-4'>Explora todo lo que tenemos para ti</p>
      </div>

    </div>
    {showError && (
        <Mensaje
          message="Credenciales inválidas. Inténtalo nuevamente."
          onClose={() => setShowError(false)}
        />
      )}
    </>
  )
}
