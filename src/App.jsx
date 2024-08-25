import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./components/Error/Error";
import Cart from "./components/Cart/Cart";

import { CartContextProvider } from "./cartContext";

function App() {
	return (
			<CartContextProvider>
				<BrowserRouter>
					<NavBar />

					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/categoria/:categoria" element={<ItemListContainer />} />
						<Route path="/detalles/:id" element={<ItemDetailContainer />} />
						<Route path="/carrito" element={<Cart />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</BrowserRouter>
			</CartContextProvider>
	);
}

export default App;
