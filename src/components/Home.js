import React from 'react'
import Aside from './Aside';
import Cabecera from './Cabecera';
import Content from './Content';
import Footer from './Footer';
//import { useTask } from '../context/TaskContext';

export default function Home() {
  // const {d} = useTask()
  // console.log(d)
  return (
    <>
      <div className="flex">
        {/* MENU LATERAL */}
        <div className="flex min-h-screen">
          <Aside />
        </div>
        {/* RESTO */}
        <div className="w-full">
          {/* Cabecera */}
          <Cabecera />
          {/* CONTENT */}
          <div className="">
            <Content />
          </div>
        </div>
     
      </div>
         {/* Footer */}
         <div>
          <Footer />
        </div>
    </>
  );
}
