import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard } from '../../../src/components/ProductCard';
import { ProductTitle } from '../../../src/components/ProductTitle';

import { product } from '../data/products';

describe('ProductTitle', () => {
  test('debe de mostar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Title" />);

    console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {() => <ProductTitle />}
      </ProductCard>
    );

    console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
