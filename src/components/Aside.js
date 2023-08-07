import React, {useState} from 'react'
import logo from '../img/logo.jpg'
import logoMobile from '../img/logo-mobile.jpg'
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
        <aside onTouchMove={handleTouch} className={`${activeBurguer ?'w-10/12 fixed':'w-[130px] static'} sm:static sm:w-[245px] h-full bg-blue-200`}>
          <div className=''>
            {/* LOGO MOBILE*/}
            <div className='cursor-pointer pt-2 sm:hidden w-full text-center mx-auto'>
            <img className='mx-auto' src={logoMobile} alt='logo'/>
            </div>
            <div className='hidden sm:block text-center mx-auto'>
              <img className='mx-auto' src={logo} alt='logo'/>
            </div>
            {/* ITEMS */}
            <ul className='items mt-5 mx-4'>
                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div>
                    <img src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block`}>
                    Dashboard
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer} >
                  <div className='flex gap-1 items-center'>
                  <div>
                    <img src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block`}>
                  Tienda
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div>
                    <img src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block`}>
                  Notificaciones
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div>
                    <img src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block`}>
                  Notificaciones
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div>
                    <img src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block`}>
                  Ventas
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div>
                    <img src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block`}>
                  Notificaciones
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div>
                    <img src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block`}>
                  Notificaciones
                  </div>
                  </div>
                </li>

                <li onClick={handleBurguer}>
                  <div className='flex gap-1 items-center'>
                  <div>
                    <img src={iconItems} alt='icon'/>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block`}>
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
