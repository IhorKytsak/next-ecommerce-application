import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '@framework/product/get-all-products';
import { getConfig } from '@framework/api/config';

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  console.log(config.apiUrl);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const message: string = 'Welcome to';

  return <div>{<div>{JSON.stringify(products)}</div>}</div>;
};

export default Home;
