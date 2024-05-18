import React from 'react'
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {


  return (
    <div className="border-gray800 border-2 rounded-2xl h-[350px] w-[200px] mt-4 items-center hover:scale-105 duration-100 flex flex-col shadow-xl bg-white">
      {children}
      <a href="https://wa.me/+5581987677807?text=Ol%C3%A1,%20Tenho%20interesse%20em%20seus%20servi%C3%A7os!">
        <button className='h-[35px] w-[130px] bg-rox rounded-3xl duration-100 text-white font-bold cursor-pointer shadow-2xl hover:bg-secundary flex justify-center items-center'> <p className='m-4'>Comprar</p></button>
      </a>
    </div>
  )
}

export default Card