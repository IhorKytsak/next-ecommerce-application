import type { FC, ReactNode } from 'react';
import { Footer, Navbar } from '@components/common';
import { Sidebar } from '@components/ui';
import { CartSidebar } from '@components/cart';
import { useUI } from '@components/ui/context';
import { ApiProvider } from '@framework';
import s from './Layout.module.css';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();

  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar />
        <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
          <CartSidebar />
        </Sidebar>
        <main className='fit'>{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
};

export default Layout;
