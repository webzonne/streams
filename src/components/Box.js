import React from 'react'
import items from '../img/cuadro.jpg'
export default function Box() {
  return (
    <div>
      {/* BOX */}
      <div className="w-1/2 mx-auto sm:w-full border p-6">
        <p className="text-center">TITULO</p>
        <img src={items} alt="items" />
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
