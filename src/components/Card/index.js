import React, {useContext} from "react";
import styles from './index.module.css'
import {BiPlus} from "react-icons/all";
import CartProductsContext from "../../contexts/CartProducts";

function Card(product){
	const {setProductsInCart} = useContext(CartProductsContext)
	
	return (
		<div className={styles.card}>
			<img src={product.image} alt={product.name}/>
			
			<div className={styles.body}>
				<span className={styles.product}>{product.name}</span>
				<span> {`$${product.price}`} </span>
			</div>
			
			<div className={styles.btndesktop}>
				<button
					onClick={() => setProductsInCart(product)}
				> <BiPlus /> </button>
			</div>
			
			<div className={styles.btnmobile}>
				<button
					onClick={() => setProductsInCart(product)}
				> Add to cart </button>
			</div>
		</div>
	)
}

export default Card