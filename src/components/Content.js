import React from 'react'
import Box from './Box'
// import Contenido from '../components/Contenido'
export default function Content() {
  return (
    <div className='py-4 bg-slate-100'>
      <div className="w-full m-auto content grid sm:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] lg:gap-[32px] 2xl:grid-cols-[repeat(4,1fr)] 2xl:gap-4">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      {/* <Contenido/> */}
    </div>
  );
}
