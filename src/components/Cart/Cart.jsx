import React, { useContext, useState, useEffect } from "react";
import "./Cart.scss";
import { CartContext } from "../../cartContext";
import { Link } from "react-router-dom";

function Cart() {
	const { cart, cartFunctions } = useContext(CartContext);

	return (
		<div className="cart">
			{cart.length > 0 ? (
				<>
					<button onClick={cartFunctions.empty}>Vaciar Carrito</button>
					{cart.map((item) => (
						<div className="cart-items-container" key={item.id}>
							<h2>{item.nombre + " (x" + item.amount + ")"}</h2>
							<p>{"$" + item.precio}</p>
								<button className="delete-button" onClick={() => cartFunctions.remove(item.id)}>Eliminar</button>
						</div>
					))}
					<p>{"Precio Total: $" + cartFunctions.price()}</p>
					<Link to="/checkout"><button>Finalizar Compra</button></Link>
				</>
			) : (
				<h3>El carrito está vacío</h3>
			)}
		</div>
	);
}

export default Cart;
