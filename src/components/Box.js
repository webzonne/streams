import React from 'react'
import items from '../img/cuadro.jpg'
export default function Box() {
  return (
    <div>
      {/* BOX */}
      <div className="w-1/2 min-w-[250px] max-w-[300px] bg-white mx-auto sm:w-full border p-6">
        <p className="mx-auto text-center">TITULO</p>
        {/* <img src={items} alt="items" /> */}
        <div className='text-center mx-auto border border-gray-300 w-[191px] h-[145px]'></div>
        <div className="flex">
          <div>
            <p>disponibles</p>
          </div>
          <div>
            <p>100 creditos</p>
            <p>1,15 usd</p>
          </div>
        </div>
      </div>
    </div>
  );
}
