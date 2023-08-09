import React, {useState} from 'react'
import logo from '../img/logo.jpg'
import logoMobile from '../img/mobile-log.jpg'
import iconItems from '../img/icon-items.jpg'

export default function Aside() {
  const [activeBurguer, setActiveBurguer] = useState(false)

  const handleBurguer = ()=>{
    setActiveBurguer(true)
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
      } h-full fixed sm:static sm:w-[245px] bg-fuchsia-400 transition-all duration-300`}>
          <div className=''>
            {/* LOGO MOBILE*/}
            <div className='cursor-pointer pt-2 sm:hidden w-full text-center mx-auto'>
            <img className='mx-auto max-w-none' width={'50px'} src='https://cupladiga.net/box-containt-assets/content-src/icono.png' alt='logo'/>
            </div>
            <div className='hidden sm:block text-center mx-auto'>
              <img className='mx-auto pt-4'  width={'80px'}  src='https://cupladiga.net/box-containt-assets/content-src/icono.png' alt='logo'/>
            </div>
            {/* ITEMS */}
            <ul className='items mt-5 mx-4'>
                <li className='text-white cursor-pointer hover:bg-fuchsia-500 px-1 py-1' onClick={handleBurguer}>
                  <div className='flex gap-2 items-center'>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path></svg>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all hover:bg-fuchsia-500 duration-300`}>
                    Dashboard
                  </div>
                  </div>
                </li>
                <li className='text-white cursor-pointer hover:bg-fuchsia-500 px-1 py-1' onClick={handleBurguer}>
                  <div className='flex gap-2 items-center'>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path></svg>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all hover:bg-fuchsia-500 duration-300`}>
                    Ventas
                  </div>
                  </div>
                </li>
                <li className='text-white cursor-pointer hover:bg-fuchsia-500 px-1 py-1' onClick={handleBurguer}>
                  <div className='flex gap-2 items-center'>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path></svg>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all  duration-300`}>
                    Productos
                  </div>
                  </div>
                </li>
                <li className='text-white cursor-pointer hover:bg-fuchsia-500 px-1 py-1' onClick={handleBurguer}>
                  <div className='flex gap-2 items-center'>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path></svg>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all  duration-300`}>
                    Promociones
                  </div>
                  </div>
                </li>
                <li className='text-white cursor-pointer hover:bg-fuchsia-500 px-1 py-1 rounded-sm' onClick={handleBurguer}>
                  <div className='flex gap-2 items-center'>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path></svg>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all  duration-300`}>
                    Configuraciones
                  </div>
                  </div>
                </li>
                <li className='text-white cursor-pointer hover:bg-fuchsia-500 px-1 py-1 rounded-sm' onClick={handleBurguer}>
                  <div className='flex gap-2 items-center'>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path></svg>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all  duration-300`}>
                    Ajustes
                  </div>
                  </div>
                </li>
                <li className='text-white cursor-pointer transition all hover:bg-fuchsia-500 px-1 py-1 rounded-sm' onClick={handleBurguer}>
                  <div className='flex gap-2 items-center'>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path></svg>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all hover:bg-fuchsia-500 duration-300`}>
                    Juegos
                  </div>
                  </div>
                </li>
                <li className='text-white cursor-pointer hover:bg-fuchsia-500 px-1 py-1 rounded-sm' onClick={handleBurguer}>
                  <div className='flex gap-2 items-center'>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path></svg>
                  </div>
                  <div className={`${activeBurguer ?'block':'hidden'} sm:block transition-all  duration-300`}>
                    productos
                  </div>
                  </div>
                </li>
                
              </ul>
          </div>
    

          </aside>
    </div>
  )
}
