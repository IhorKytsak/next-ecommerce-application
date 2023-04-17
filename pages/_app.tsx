import '@assets/main.css';
import type { AppProps } from 'next/app';
import type { FC, ReactNode } from 'react';

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

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
