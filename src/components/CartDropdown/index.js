import React, {useContext} from "react";
import styles from './index.module.css'
import {CartProductsContext} from "../../contexts";

function CartDropdown({isVisible=true}){
	const {productsInCart, addProductsInCart, subtractProductsInCart, subTotal} = useContext(CartProductsContext)
	
	return (
		<div className={`${styles.cart} ${isVisible ? styles.show : ''}`}>
			{productsInCart.map(({id, name, price, image, quantity}) => {
				return(
					<div key={id} className={styles.item}>
						<img src={image} alt="Cart Thumbnail"/>
						
						<div className={styles.info}>
							<span className={styles.bold}>{name}</span>
							<span className={styles.small}>{`$${price}`}</span>
						</div>
						
						<div className={styles.actions}>
							<button onClick={() => subtractProductsInCart(id)}>-</button>
							<span className={styles.quantity}>{quantity}</span>
							<button onClick={() => addProductsInCart(id)}>+</button>
						</div>
					</div>
				)
			})}
			
			<div className={styles.total}>
				<div>
					<span className={styles.bold}>Sub Total</span>
					<span className={styles.small}>${subTotal.toFixed(2)}	</span>
				</div>
				<button>Check out</button>
			</div>
		</div>
	)
}

export default CartDropdown