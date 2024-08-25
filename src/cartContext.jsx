import { createContext, useState } from "react";

const CartContext = createContext();

function CartContextProvider({ children }) {
	const [cart, setCart] = useState([]);

	const cartFunctions = {
		add: (item, amount) => {
			setCart((oldCart) => {
				if (cartFunctions.check(item.id)) {
					return oldCart.map((product) =>
						product.id === item.id
							? { ...product, amount: product.amount + amount }
							: product
					);
				} else {
					return [...oldCart, { ...item, amount }];
				}
			});
		},
		check: (id) => cart.some((item) => item.id === id),
		remove: (id) => {
			setCart((prevCart) => prevCart.filter((item) => item.id !== id));
		},
		empty: () => setCart([]),
		price: () => {
			return cart.length > 0 
				? cart.reduce((total, item) => total + item.amount * item.precio, 0) 
				: 0;
		},
	};

	return <CartContext.Provider value={{ cart, cartFunctions }}>{children}</CartContext.Provider>;
}

export { CartContext, CartContextProvider };
