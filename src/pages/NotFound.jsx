import { div, p } from 'framer-motion/client'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <p className='font-bold text-6xl center'>404</p>
      <p className='font-bold text-2xl center'>Pagina No encontrada</p>
    </div>
  )
}

export default NotFound