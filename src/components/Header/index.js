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
				<input type="checkbox" id="menu" className={styles.ckboxMenu}/>
				<label className={styles.hamburguer} htmlFor="menu">
					<span/>
					<span/>
					<span/>
				</label>
				
				<div className={styles.menu}>
					<div>SHOP</div>
					<div>PRODUCTS</div>
					<div> LOGIN </div>
				</div>
				
				<div className={styles.logo}>
					LIVEN STORE
				</div>
				
				<div className={styles.flex}>
					<div className={styles.themeButton}>
						{theme === 'dark' && <BsSun size={25} onClick={() => toggleTheme()} />}
						{theme === 'light' && <BiMoon size={25} onClick={() => toggleTheme()} />}
					</div>
					
					<div className={styles.cart}>
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
		</div>
	)
}

export default Header