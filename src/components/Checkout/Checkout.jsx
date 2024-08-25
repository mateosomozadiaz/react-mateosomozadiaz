import { useContext, useState } from "react";
import "./Checkout.scss";

import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

import { CartContext } from "../../cartContext";
import Cart from "../Cart/Cart";

function Checkout() {
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [dir, setDir] = useState("");

	const [order, setOrder] = useState("");
	const [loading, setLoading] = useState(false);

	const { cart, cartFunctions } = useContext(CartContext);

	const formatOrder = {
		cart: cart,
		nombre: nombre,
		email,
		dir,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		const orderRef = collection(db, "ordenes");
		addDoc(orderRef, formatOrder)
			.then((orderDoc) => {
				cartFunctions.empty();
				setOrder(orderDoc.id);
			})
			.catch((err) => {
				console.error("Hubo un error al procesar tu compra:", err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	if (order) {
		return <h3 className="compra-realizada">Compra Realizada! (ID de compra: {order})</h3>;
	}

	return (
		<div>
			<form className="formulario-compra" onSubmit={handleSubmit}>
				<input
					type="text"
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
					placeholder="Nombre"
				/>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Mail"
				/>
				<input
					type="text"
					value={dir}
					onChange={(e) => setDir(e.target.value)}
					placeholder="Dirección"
				/>
				<button type="submit" disabled={loading}>
					{loading ? "Cargando" : "Confirmar Compra"}
				</button>
			</form>
		</div>
	);
}

export default Checkout;
