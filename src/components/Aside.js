import React, {useState} from 'react'
import logo from '../img/logo.jpg'
import logoMobile from '../img/mobile-log.jpg'
import iconItems from '../img/icon-items.jpg'

export default function Aside() {
  const [activeBurguer, setActiveBurguer] = useState(false)

  const handleBurguer = ()=>{
    setActiveBurguer(!activeBurguer)
  }
  const handleTouch = (e)=>{
    if (e.touches[0].clientX < window.innerWidth - 100) {
      setActiveBurguer(false)
    }
  }
  return (
    <div>
        <aside onTouchMove={handleTouch} className={`${
        activeBurguer ? 'fixed w-[300px] sm:w-[245px]' :'w-[72px]'
      } h-full fixed sm:static sm:w-[245px] bg-blue-200 transition-all duration-300`}>
          <div className=''>
            {/* LOGO MOBILE*/}
            <div className='cursor-pointer pt-2 sm:hidden w-full text-center mx-auto'>
            <img className='mx-auto max-w-none' width={'50px'} src={logoMobile} alt='logo'/>
            </div>
            <div className='hidden sm:block text-center mx-auto'>
              <img className='mx-auto'  src={logo} alt='logo'/>
            </div>
            {/* ITEMS */}
            <ul className='items mt-5 mx-4'>
                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div>
                    <img className='max-w-none' width={'45px'} src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all duration-300`}>
                    Dashboard
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer} >
                  <div className='flex gap-1 items-center'>
                  <div className='w-[45px]'>
                    <img className='max-w-none' width={'45px'} src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all duration-300`}>
                  Tienda
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div className='w-[45px]'>
                    <img className='max-w-none' width={'45px'} src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all duration-300`}>
                  Notificaciones
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div className='w-[45px]'>
                    <img className='max-w-none' width={'45px'} src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all duration-300`}>
                  Notificaciones
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div className='w-[45px]'>
                    <img className='max-w-none' width={'45px'} src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all duration-300`}>
                  Ventas
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div className='w-[45px]'>
                    <img className='max-w-none' width={'45px'} src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all duration-300`}>
                  Notificaciones
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div className='w-[45px]'>
                    <img className='max-w-none' width={'45px'} src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all duration-300`}>
                  Notificaciones
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div className='w-[45px]'>
                    <img className='max-w-none' width={'45px'} src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all duration-300`}>
                  Notificaciones
                  </div>
                  </div>
                </li>
              </ul>
          </div>
    

          </aside>
    </div>
  )
}
