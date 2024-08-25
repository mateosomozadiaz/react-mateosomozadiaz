import "./ItemDetailContainer.scss";
import "toastify-js/src/toastify.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
	const [data, setData] = useState({});
	const { id } = useParams();

	useEffect(() => {
			const ref = doc(db, "productos", id);
			getDoc(ref)
			.then((snapshot) => {
				setData({ id: snapshot.id, ...snapshot.data() });
			})
			.catch((error) => {
				console.error(error);
			});

	}, [id]);

	return (
		<>
			{Object.keys(data).length === 0 ? (
				<img className="loading" src="../loading.gif" alt="Cargando..." />
			) : (
				<div className="item-detail-container">
					<img src={data.img} alt={data.nombre} />
					<div>
						<ItemDetail item={data} />
					</div>
				</div>
			)}
		</>
	);
}

export default ItemDetailContainer;
