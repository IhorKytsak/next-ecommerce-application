import { ImageEdge, Product as ShopifyProduct } from '../schema';

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));

export function normalizeProduct(productNode: ShopifyProduct): any {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageCollection,
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
    ...rest,
  };

  return product;
}
