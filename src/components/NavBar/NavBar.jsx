import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav className="navbar">
			<img
				src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
				alt="Logo de Apple"
			/>

			<ul>
				<li>
					<Link to="/">Inicio</Link>
				</li>
				<li>
					<Link to="/categoria/telefonos">Teléfonos</Link>
				</li>
				<li>
					<Link to="/categoria/tablets">Tablets</Link>
				</li>
				<li>
					<Link to="/categoria/relojes">Relojes</Link>
				</li>
			</ul>

			<Link to="/carrito">
				<img
					className="cart-button"
					src="https://img.icons8.com/?size=100&id=85180&format=png&color=000000"
					alt="Carrito de compras"
				/>
			</Link>
		</nav>
	);
}

export default NavBar;
