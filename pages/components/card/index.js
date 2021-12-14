import Image from 'next/image';
import React from 'react';
import * as S from './card.module.css';
import { Equilibrium } from '../../../public/images';

const Card = (props) => {
  return (
    <div className='flex flex-col h-[600px] rounded-xl  w-[350px] mx-auto my-auto bg-card justify-center p-6 shadow-xl'>
      {props.children}
    </div>
  );
};

export default Card;
