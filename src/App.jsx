import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/detalles/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
