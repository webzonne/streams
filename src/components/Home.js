import React from 'react'
import Aside from './Aside';
import Cabecera from './Cabecera';
import Content from './Content';

export default function Home() {
  return (
    <>
      <div className="flex">
        {/* MENU LATERAL */}
        <div>
          <Aside />
        </div>
        {/* RESTO */}
        <div className="w-full">
          {/* Cabecera */}
         <Cabecera/>
          {/* CONTENT */}
          <div>
         <Content/>
          </div>
        </div>


      </div>
    </>
  );
}
