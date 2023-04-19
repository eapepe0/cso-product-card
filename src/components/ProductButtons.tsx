import React ,{ useContext , useCallback } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props{
    className? : string;
    style? : React.CSSProperties;
}

export const ProductButtons = ({className, style} : Props) =>{

    const { increaseBy , counter , maxCount } = useContext(ProductContext)

   const isMaxReached = useCallback(
     () => !!maxCount && counter === maxCount ,
     [counter , maxCount],
   )

    return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
            -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={`${styles.buttonAdd} ${isMaxReached () && styles.disabled}`} onClick={() => increaseBy(+1)}>
            +
        </button>
    </div>
   );
}
/**
 * //* linea 4 : importamos los estilos
 * //* linea 6 : creamos una interface para recibir el className , el cual definimos como que puede existir y es una string
 * 
 * //* linea 10 : pasamos el className y le pasamos la interface 
 * 
 * //* linea 15 : le aplicamos los estilos pasados por el className el cual agregamos con los backticks a los styles del propio componente
 * //*            se lo aplicamos al contenedor asi , se aplican a todos los elementos hijos , en caso de querer aplicar solo a un elemento
 * //*            se usa en el css .custom-css button{ color : red } , se define el elemento en este caso button
 */