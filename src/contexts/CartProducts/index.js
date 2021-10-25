import React, {createContext, useEffect, useState} from "react";

const CartProductsContext = createContext({})

export function CartProductsProvider({children}){
	const [productsInCart, updateProductsInCart] = useState([])
	const [subTotal, setSubTotal] = useState(0)
	
	useEffect(() => {
		setSubTotal(productsInCart.reduce((total, item) => {
			return total + (parseFloat(item.price) * parseInt(item.quantity))
		}, 0))
	}, [productsInCart])
	
	function setProductsInCart(product){
		const {length: qtdArray} = productsInCart.filter(p => p.id === product.id)
		
		if(!qtdArray){
			updateProductsInCart([...productsInCart, {...product, quantity: 1}])
		}
	}
	
	function removeProductsInCart(id_product){
		const o = productsInCart.filter(p => p.id !== id_product)
		console.log('__________________')
		console.log(o)
		console.log('remover produto do carrinho')
		updateProductsInCart(o)
	}
	
	function addProductsInCart(id_product){
		updateProductsInCart(productsInCart.map(v => {
			if(v.id === id_product) v.quantity = v.quantity +1
			
			return v
		}))
	}
	
	function subtractProductsInCart(id_product){
		const arr = []
		productsInCart.forEach(v => {
			if(v.id === id_product) v.quantity = v.quantity -1
			
			if(v.quantity !== 0) arr.push(v)
		})
		
		updateProductsInCart(arr)
	}
	
	return (
		<CartProductsContext.Provider
			value={{
				productsInCart,
				setProductsInCart,
				removeProductsInCart,
				addProductsInCart,
				subtractProductsInCart,
				subTotal
			}}
		>
			{children}
		</CartProductsContext.Provider>
	)
}

export default CartProductsContext