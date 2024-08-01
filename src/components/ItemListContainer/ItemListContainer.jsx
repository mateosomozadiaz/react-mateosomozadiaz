import React, { useState, useEffect } from "react";
import { getData, getDataByCategory, getDataById } from "../../Data.js";
import { useParams, Link } from 'react-router-dom'
import "./ItemListContainer.scss"

function ItemListContainer() {
  const [data, setData] = useState([]);
  
  const { categoria } = useParams();
  
  useEffect(() => {

    setData([]);

    if (categoria && categoria !== 'detalles') {
      getDataByCategory(categoria)
      .then((response) => setData(response))
      .catch((error) => console.error(error));
    } else {
      getData()
      .then((response) => setData(response))
      .catch((error) => console.error(error));
    }

  }, [categoria]);

  return (
    <div className={data.length !== 0 ? "item-list-container" : ("")}>
      {data.length === 0 ? (
          <img className="loading" src="../loading.gif" alt="Cargando..." />
      ) : (
        data.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={item.img} alt={"Imagen de " + item.nombre} />

              <p>{item.nombre}</p>

              <p className="price" >{"$" + item.precio}</p>

              <Link className="button-link" to={"/detalles/" + item.id}><button>Ver Detalles</button></Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ItemListContainer;
