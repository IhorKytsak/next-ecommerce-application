import { FC } from 'react';
import Link from 'next/link';
import { Container } from '@components/ui';
import { Usernav } from '@components/common';
import s from './Navbar.module.css';

const Navbar: FC = () => {
  return (
    <Container>
      <div className={s.root}>
        <div className='flex flex-1 items-center'>
          <Link href='/' className={s.logo}>
            NEXT_STORE
          </Link>
          <nav className='ml-6 space-x-6'>
            <Link href='/' className={s.link}>
              All
            </Link>
            <Link href='/' className={s.link}>
              Clothes
            </Link>
            <Link href='/' className={s.link}>
              Accesories
            </Link>
            <Link href='/' className={s.link}>
              Shoes
            </Link>
          </nav>
          <div className='flex flex-1 justify-end space-x-8'>
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;