import type { MoneyV2, ImageEdge, Product as ShopifyProduct } from '../schema';
import type { Product } from '@common/types/product';

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => ({
  value: +amount,
  currencyCode,
});

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageCollection,
    priceRange,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    images: normalizeProductImages(imageCollection),
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
}
