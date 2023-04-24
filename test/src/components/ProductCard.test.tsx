import React from 'react';
import { create } from 'react-test-renderer';
import { act } from 'react-test-renderer';
import { ProductCard } from '../../../src/components';

import { product } from '../data/products';

describe('ProductCard', () => {
  test('debe de mostar el componente correctamente ', () => {
    const wrapper = create(
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de incrementar el contador', () => {
    const wrapper = create(
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ count, increaseBy }) => (
          <>
            <h1>ProductCard</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    act(() => {
      wrapper.root.findByType('button').props.onClick(); //* simulamos el click
    });
    console.log(wrapper.root.findByType('span').children[0]);
    expect(wrapper.root.findByType('span').children[0]).toBe('5');
  });
});
