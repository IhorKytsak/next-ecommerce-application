import { normalizeProduct, getAllProductsQuery } from '../utils';

import type { ProductConnection } from '../schema';
import type { Product } from '@common/types/product';
import type { ApiConfig } from '@common/types/api';

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    query: getAllProductsQuery,
  });

  const products =
    data.products.edges.map(({ node }) => {
      return normalizeProduct(node);
    }) ?? [];

  return products;
};

export default getAllProducts;
