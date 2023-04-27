import '@assets/main.css';
import type { AppProps } from 'next/app';
import type { FC, ReactNode } from 'react';
import { UIProvider, useUI } from '@components/ui/context';

interface PropsWithChildren {
  children: ReactNode;
}

interface AdditionalComponentProps {
  Layout?: FC<PropsWithChildren>;
}

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

const MyApp = ({
  Component,
  pageProps,
}: AppProps & { Component: AdditionalComponentProps }) => {
  const Layout = Component.Layout ?? Noop;
  const ui = useUI();

  console.log(ui);

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
};

export default MyApp;
