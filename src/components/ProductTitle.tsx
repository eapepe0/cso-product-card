import React ,{ useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props {
    title? : string;
    className? : string;
    style? : React.CSSProperties;
}

export const ProductTitle= ({title , className , style} : Props) =>{

    const { product } = useContext(ProductContext);

      return(
          <span className={`${styles.productDescription} ${className}`} style={style}>{title ? title : product.title}</span>
      )
}

/**
 * //* linea 6 : recibimos un titulo el cual es una string , pero puede no existir y un className que tambien puede o no existir y es una string
 * //* creamos una interface por que le estamos agregando el className 
 * 
 * //* linea 13 : extraemos el product del context
 * 
 *//* linea 16 : si existe el titulo lo mostramos sino el product.title , concatenamos el estilo definido y uno creado por nosotros
 */