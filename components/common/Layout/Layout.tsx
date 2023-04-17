import type { FC, ReactNode } from 'react';
import s from './Layout.module.css';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.root}>
      <main className='fit'>{children}</main>
    </div>
  );
};

export default Layout;
