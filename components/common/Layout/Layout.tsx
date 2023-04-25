import type { FC, ReactNode } from 'react';
import { Footer, Navbar } from '@components/common';
import s from './Layout.module.css';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.root}>
      <Navbar />
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
