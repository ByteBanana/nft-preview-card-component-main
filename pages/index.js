import Head from 'next/head';
import Card from './components/card';
import { Clock, Equilibrium, Ethereum, Avatar } from '../public/images';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-[100vh] bg-main flex'>
      <p className='absolute p-4 m-4 bg-gray-400 rounded-full animate-bounce'>
        Create by{' '}
        <a
          rel='stylesheet'
          href='https://github.com/ByteBanana'
          className='text-yellow-200 underline'
        >
          @ByteBanana
        </a>
      </p>
      <Card>
        <Image
          layout='fixed'
          src={Equilibrium}
          width={300}
          height={300}
          className='rounded-lg shadow-2xl'
        />
        <div className='flex-1'>
          <h3 className='py-6 text-lg text-white font-outfit'>
            Equilibrium #3429
          </h3>
          <p className='text-lg text-soft-blue'>
            Our Equilibrium collection propmotes balance and calm.
          </p>
        </div>
        <div className='flex justify-between py-4'>
          <div className='flex items-center'>
            <Image src={Ethereum} layout='fixed' />{' '}
            <p className='ml-1 tracking-wide text-cyan'>0.041 ETH</p>
          </div>
          <div className='flex items-center space-x-1'>
            <Image src={Clock} layout='fixed' />
            <p className='tracking-wide text-soft-blue'>3 days left</p>
          </div>
        </div>
        <div className='flex items-center py-4 space-x-2 border-t border-line'>
          <div className='border rounded-full w-[32px] h-[32px]'>
            <Image src={Avatar} layout='responsive' objectFit='cover' />
          </div>
          <p className='text-soft-blue'>
            Creation of{' '}
            <Link href='#'>
              <span className='text-white'>Jules Wyvern</span>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
