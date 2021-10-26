import React, {useContext} from "react";
import {Header} from "../../components";
import styles from "./index.module.css"
import CartProductsContext from "../../contexts/CartProducts";
import {AiOutlineClose} from "react-icons/all";

function Cart(){
	const {productsInCart, subTotal, addProductsInCart, subtractProductsInCart, removeProductsInCart } = useContext(CartProductsContext)
	
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.cardContainer}>
					<div>
						<div className={styles.card}>
							<span className={styles.title}>Your order</span>
							{productsInCart.map(product => {
								console.log(product)
								return(
									<div
										key={product.id}
										className={styles.item}
									>
										<img src={product.image} alt={product.name} />
										<div className={styles.info}>
											<div className={styles.name}>{product.name}</div>
											<div>
												<span>Product Quantity: </span>
												
												<input
													type="number"
													defaultValue={product.quantity}
													onChange={({target: {value}}) => value > product.quantity ? addProductsInCart(product.id) : subtractProductsInCart(product.id)}
												/>
											</div>
										</div>
										<div className={styles.value}>
											<span>
												${product.price}
											</span>
											
											<span className={styles.delete} onClick={() => window.confirm('Deseja realmente excluir este item do carrinho?') && removeProductsInCart(product.id)}>
											    <AiOutlineClose />
											</span>
										</div>
									</div>
								)
							})}
						</div>
					</div>
					
					<div className={styles.cardContainer}>
						<div>
							<div className={styles.card}>
								<span className={styles.title}>Total</span>
								<div className={styles.cartInfo}>
									<span>Subtotal:</span>
									<span>${subTotal.toFixed(2)}</span>
								</div>
								<div className={styles.cartInfo}>
									<span>Delivery:</span>
									<span>Free</span>
								</div>
								<span className={styles.divider}/>
								<div className={styles.cartInfo}>
									<span className={styles.bold}>TOTAL TO PAY</span>
									<span className={styles.bold}>${subTotal.toFixed(2)}</span>
								</div>
							</div>
							<button className={styles.btnConfirm}>Confirm my order</button>
						</div>
					</div>
					
				</div>
			</div>
		</>
	)
}

export default Cart