import { useState, useContext } from "react";
import Toastify from "toastify-js";
import "./ItemDetail.scss";
import { CartContext } from "../../cartContext";

function ItemDetail(props) {
	const [count, setCount] = useState(1);
	const { cartFunctions } = useContext(CartContext);
	const { item } = props;


	return (
		<div className="item-detail">
			<h2>{item.nombre}</h2>
			<p>{item.descripcion}</p>
			<div>
				<button onClick={() => (count > 1 ? setCount(count - 1) : "")}>-</button>
				<p>{count}</p>
				<button onClick={() => setCount(count + 1)}>+</button>
				<button
					onClick={() => {
						cartFunctions.add(item, count);
						Toastify({
							text: "Agregaste " + item.nombre + " (x" + count + ")",
							duration: 5000,
							close: true,
							gravity: "bottom",
							position: "right",
							stopOnFocus: true,
							className: "toast",
							style: {
								background: "white",
							},
						}).showToast();
					}}>
					Add To Cart
				</button>
			</div>
		</div>
	);
}

export default ItemDetail;
