import type { FC, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className='layout'>{children}</div>;
};

export default Layout;
