import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.scss';
import { getDataById } from '../../Data';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

function ItemDetailContainer() {
    const [data, setData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getDataById(id)
        .then((response) => setData(response))
        .catch((error) => console.error(error));
    }, [id]);

    return(
        <>
            {Object.keys(data).length === 0 ? (
                <div className="item-detail-container">

                    <img src={data.img} alt={data.nombre} />

                    <div>
                        <h2>{data.nombre}</h2>
                        <p>{data.descripcion}</p>

                        <button onClick={() => {
                            Toastify({
                                text: "Agregaste " + data.nombre,
                                duration: 5000,
                                close: true,
                                gravity: "top",
                                position: "right",
                                stopOnFocus: true,
                                className: "toast",
                                style: {
                                  background: "white",
                                }
                            }).showToast();
                        }}>Agregar al Carrito</button>
                        
                    </div>

                </div>
            ) : (
                <img className="loading" src="../loading.gif" alt="Cargando..." />
            )}
        </>
    );
}

export default ItemDetailContainer;
          