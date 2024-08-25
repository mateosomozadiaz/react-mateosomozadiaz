import "./ItemListContainer.scss";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function ItemListContainer() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const { categoria } = useParams();

	useEffect(() => {
		const collectionRef = collection(db, "productos");

		let queryCategoria;
		if (categoria) {
			queryCategoria = query(collectionRef, where("categoria", "==", categoria));
		} else {
			queryCategoria = query(collectionRef);
		}

		setLoading(true);

		getDocs(queryCategoria)
			.then((snapshot) => {
				const items = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setData(items);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setLoading(false);
			});
	}, [categoria]);

	return (
		<div className={loading ? "" : "item-list-container"}>
			{loading ? (
				<img className="loading" src="../loading.gif" alt="Cargando..." />
			) : data.length === 0 ? (
				<p>No hay productos disponibles.</p>
			) : (
				data.map((item) => (
					<div className="item" key={item.id}>
						<img src={item.img} alt={"Imagen de " + item.nombre} />
						<p>{item.nombre}</p>
						<p className="price">{"$" + item.precio}</p>
						<Link className="button-link" to={"/detalles/" + item.id}>
							<button>Ver Detalles</button>
						</Link>
					</div>
				))
			)}
		</div>
	);
}

export default ItemListContainer;
