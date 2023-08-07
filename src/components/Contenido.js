import React, { useEffect, useState } from 'react'
import Form from './Form'
import { v4 as uuidv4 } from 'uuid';
import Chance from 'chance';

export default function Contenido() {
// CONTANTES Y ESTADOS
const init= {
    nombre_plataforma:'',
    descripcion_plataforma:'',
    campos:[]
}

const [formActive, setFormActive] = useState(false)
const [datos, setDatos] = useState(init)
const [plataformas, setPlataformas] = useState([])
const [fields, setFields] = useState([])
const [user,setUser] = useState()
const [pass,setPass] = useState()


// FUNCIONES

// GENERAR NOMBRE 
const chance = new Chance()
const RandomName = () => {
    return chance.name()
  };
// GENERAR CONTRASENA
const generateRandomPassword = () => {
    return uuidv4();
  };

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// ACTIVAR MODAL
const handleClick = ()=>{
    setFormActive(!formActive)
    setFields([])
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// RECOGER VALORES DE INPUT
const handleChange = (e)=>{
    const {name, value} = e.target
    setDatos({...datos, [name]:value})
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 

// RECOGER VALORES DE INPUT DE CAMPOS PERSONALIZADOS
const handleChangeFields = (e, index)=>{
    const { name, value } = e.target;
    const updatedFields = [...fields];
    updatedFields[index] = { ...updatedFields[index], [name]: value };
    setFields(updatedFields);
    setDatos({ ...datos, campos: updatedFields });
}

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// AGREGAR CAMPOS
const addFields = (e)=>{
    e.preventDefault()
    const randomNombre = RandomName()
    setUser(randomNombre)
    const randomPassword = generateRandomPassword()
    setPass(randomPassword)
    const newField = {
        usuario: randomNombre,
        contrasena: randomPassword,
      };
    setDatos({ ...datos, campos: [...datos.campos, newField] });
    setFields([...fields, ''])
}
// ELIMINAR CAMPOS
const handleDeleteFields = (e, index)=>{
    e.preventDefault()
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ENVIAR DATOS
const handleSubmit = (e)=>{
    e.preventDefault()
    setPlataformas([...plataformas, datos]);
    setDatos(init)
    setFields([])
    handleClick()
    console.log(datos)
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

useEffect(()=>{
    console.log(plataformas)
},[plataformas])

  return (
    <div>
      <div className="w-10/12 mx-auto mt-12">
        <button
          onClick={handleClick}
          className="text-white bg-blue-500 py-2 px-4 hover:bg-black"
        >
          Crear plataforma
        </button>
      </div>
      <div className={`${formActive ? 'null':'hidden'}`}>
        <Form
        datos={datos}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        handleChangeFields={handleChangeFields}
        addFields={addFields}
        handleDeleteFields={handleDeleteFields}
        fields={fields}
        user={user}
        pass={pass}
         
        />
      </div>

      {/* LISTA */}
      <div className='mt-12 mb-4'>
            <h1 className='font-semibold text-2xl text-center'>LISTA</h1>
      </div>
      <div className='w-10/12 mx-auto border bg-gray-100 p-4'>
        { plataformas.length ? plataformas.map((e, index)=>{
            return(
            <div className='border p-6 bg-white mt-4' key={index}>
                <p>{e.nombre_plataforma.toUpperCase()}</p>
                <p>{e.descripcion_plataforma}</p>
                {e.campos.map((e, index)=>{
                    return (
                      <div key={index} className='border p-4 my-2'>
                        <p className='font-semibold'>Usuario:</p>
                        <p>{e.usuario}</p>
                        <p className='font-semibold' >contraseña:</p>
                        <p>{e.contrasena}</p>
                      </div>
                    );
                })}
             
            </div>
            )}):<p>En estos momentos la lista esta vacia..</p>}
      </div>
    </div>
  );
}

