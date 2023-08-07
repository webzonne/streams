import React from 'react'
import logo from '../img/logo.jpg'

export default function Aside() {
  return (
    <div>
        <aside className="flex w-[245px] bg-blue-200">
          {/* MOBILE */}
          <div className=''>
            {/* LOGO */}
              <div>

              </div>
            {/* ITEMS */}
            <div>

            </div>
          </div>
          {/* DESK */}
          <div className=''>
            {/* LOGO */}
            <div className='text-center mx-auto'>
              <img className='mx-auto' src={logo} alt='logo'/>
            </div>
            {/* ITEMS */}
            <ul className='items mt-5 mx-4'>
                <li>Dashboard</li>
                <li>Tienda</li>
                <li>Notificaciones</li>
                <li>Ventas</li>
                <li>Clientes</li>
                <li>Productos</li>
                <li>Proveedores</li>
                <li>Usuarios</li>
                <li>Publicidad</li>
                <li>Tutoriales</li>
                <li>Descargar Apk</li>
                <li>Metodos de pagos</li>
                <li>Ajustes</li>
              </ul>
          </div>
    

          </aside>
    </div>
  )
}
