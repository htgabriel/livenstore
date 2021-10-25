import React, {useContext, useState} from "react";
import {MdOutlineShoppingCart} from "react-icons/all";
import {CartDropdown} from "../";
import styles from './index.module.css'
import CartProductsContext from "../../contexts/CartProducts";

function Header(){
	const [cartVisible, setVisibility] = useState(false)
	const {productsInCart} = useContext(CartProductsContext)
	
	function toggleDropdown(){
		setVisibility(!cartVisible)
	}
	
	return (
		<div className={styles.header}>
			<div className={styles.content}>
				<div className={styles.menu}>
					<div>SHOP</div>
					<div>PRODUCTS</div>
				</div>
				
				<div className={styles.logo}>
					LIVEN STORE
				</div>
				
				<div className={styles.relative}>
					<MdOutlineShoppingCart
						size={35}
						onClick={toggleDropdown}
						className={styles.pointer}
					/>
					
					<span className={styles.productsInCart}>
						{productsInCart.length}
					</span>
					
					<CartDropdown
						isVisible={cartVisible}
					/>
				</div>
			</div>
		</div>
	)
}

export default Header