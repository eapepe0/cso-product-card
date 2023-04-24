# CSO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Cristian Sebastian Oyola

## Ejemplo

```javascript
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from 'cso-product-card';
```

```javascript
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```

```

```
