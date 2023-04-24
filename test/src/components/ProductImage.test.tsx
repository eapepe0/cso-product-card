import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard } from '../../../src/components/ProductCard';
import { ProductImage } from '../../../src/components/ProductImage';

import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe de mostar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductImage img="../../../src/assets/no-image.jpg" />
    );

    console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard
        product={product2}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {() => <ProductImage />}
      </ProductCard>
    );

    console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
