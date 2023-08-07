import React from 'react'

export default function Form({handleClick, handleChange, handleChangeFields, handleSubmit, handleDeleteFields, addFields, fields, pass, user, datos, }) {
   

    // FUNCIONES
   
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative overflow-y-auto h-[500px] w-4/12 bg-white pt-12 pb-6 px-6 rounded-md shadow-lg transform">
        <div className="absolute top-0 right-0">
          <button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Nombre de la plataforma</label>
          <br />
          <input onChange={handleChange} type="text" className="border w-full mb-4" value={datos.nombre_plataforma} name="nombre_plataforma" />
          <br />
          <label>Descripcion de la plataforma</label>
          <br />
          <input onChange={handleChange} className="border mb-4 w-full" type="text" value={datos.descripcion_plataforma} name="descripcion_plataforma"
          />
          <br />
            {/* BOTON AGREGAR CAMPOS */}
          <div className="text-center mb-4">
            <button onClick={addFields}>
              <div className="flex gap-2 bg-green-500 px-4 py-2 text-white items-start">
                <div>ITEMS</div>
                <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                </div>
              </div>
            </button>
          </div>

          {/* CAMPOS CREADOS */}
          {fields.length > 0 && fields.map((f, index)=>{
            return(
                <div className='border p-4 mt-2 relative' key={index}>
                    <div className='absolute top-0 right-0'>
                        <button onClick={(e)=>handleDeleteFields(e, index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    <label>Usuario</label><br/>
                    <input onChange={(e)=> handleChangeFields(e, index)} className='border' placeholder={user} type='text' name='usuario'/><br/>
                    <label>Contrasena</label><br/>
                    <input onChange={(e)=> handleChangeFields(e, index)} className='border' placeholder={pass} type='text' name='contrasena'/>
                </div>
          )})}

          <div className='w-full mt-12'>
            <button className="w-full border bg-blue-500 py-2 px-4">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
