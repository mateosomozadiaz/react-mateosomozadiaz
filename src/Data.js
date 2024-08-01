const data = [
    {
      id: 1,
      nombre: 'iPhone 15 Pro',
      categoria: 'telefonos',
      imagen: 'iphone_15_pro.jpg',
      precio: 999,
      img: 'https://http2.mlstatic.com/D_NQ_NP_891263-MLA71783089058_092023-O.webp',
      descripcion: 'El iPhone 15 Pro ofrece un rendimiento increíble con su chip A17 Pro y una cámara avanzada para fotos y videos profesionales.'
    },
    {
      id: 2,
      nombre: 'iPhone 14',
      categoria: 'telefonos',
      imagen: 'iphone_14.jpg',
      precio: 799,
      img: 'https://http2.mlstatic.com/D_NQ_NP_881016-MLM51559383738_092022-O.webp',
      descripcion: 'El iPhone 14 combina potencia y elegancia con su chip A15 Bionic y un sistema de cámaras que captura fotos impresionantes en cualquier condición.'
    },
    {
      id: 3,
      nombre: 'iPhone 13 Mini',
      categoria: 'telefonos',
      imagen: 'iphone_13_mini.jpg',
      precio: 699,
      img: 'https://http2.mlstatic.com/D_NQ_NP_887477-MLA43978261567_112020-O.webp',
      descripcion: 'El iPhone 13 Mini es compacto pero poderoso, con una pantalla Super Retina XDR y una duración de batería que te acompaña todo el día.'
    },
    {
      id: 4,
      nombre: 'iPhone SE (3ra generación)',
      categoria: 'telefonos',
      imagen: 'iphone_se_2024.jpg',
      precio: 499,
      img: 'https://http2.mlstatic.com/D_NQ_NP_626404-MLA74035659712_012024-O.webp',
      descripcion: 'El iPhone SE (2024) ofrece un rendimiento de alta gama a un precio accesible con el chip A15 Bionic en un diseño clásico.'
    },
    {
      id: 5,
      nombre: 'iPad Pro 12.9"',
      categoria: 'tablets',
      imagen: 'ipad_pro_12_9.jpg',
      precio: 1199,
      img: 'https://http2.mlstatic.com/D_NQ_NP_994384-MLU77738266205_072024-O.webp',
      descripcion: 'El iPad Pro 12.9" es ideal para profesionales con su pantalla Liquid Retina XDR, el chip M2 y capacidades de nivel de escritorio.'
    },
    {
      id: 6,
      nombre: 'iPad Air',
      categoria: 'tablets',
      imagen: 'ipad_air.jpg',
      precio: 699,
      img: 'https://http2.mlstatic.com/D_NQ_NP_655708-MLU78049164347_072024-O.webp',
      descripcion: 'El iPad Air combina un diseño elegante con el chip M1, ofreciendo un rendimiento impresionante en un formato ligero y versátil.'
    },
    {
      id: 7,
      nombre: 'iPad Mini',
      categoria: 'tablets',
      imagen: 'ipad_mini.jpg',
      precio: 499,
      img: 'https://http2.mlstatic.com/D_NQ_NP_632987-MLU74118278126_012024-O.webp',
      descripcion: 'El iPad Mini es compacto y potente, con una pantalla Liquid Retina y el chip A15 Bionic para una experiencia fluida y rápida.'
    },
    {
      id: 8,
      nombre: 'iPad 10ª Generación',
      categoria: 'tablets',
      imagen: 'ipad_10_generacion.jpg',
      precio: 329,
      img: 'https://http2.mlstatic.com/D_NQ_NP_861430-MLU70654720411_072023-O.webp',
      descripcion: 'El iPad 10ª Generación ofrece una pantalla de 10.9" y el chip A14 Bionic, perfecto para el uso diario y tareas educativas.'
    },
    {
      id: 9,
      nombre: 'Apple Watch Ultra',
      categoria: 'relojes',
      imagen: 'apple_watch_ultra.jpg',
      precio: 799,
      img: 'https://http2.mlstatic.com/D_NQ_NP_784124-MLA54821130080_042023-O.webp',
      descripcion: 'El Apple Watch Ultra es el reloj de aventura definitivo con una construcción robusta, GPS preciso y resistencia extrema.'
    },
    {
      id: 10,
      nombre: 'Apple Watch Series 8',
      categoria: 'relojes',
      imagen: 'apple_watch_series_8.jpg',
      precio: 399,
      img: 'https://http2.mlstatic.com/D_NQ_NP_710273-MLA52127704169_102022-O.webp',
      descripcion: 'El Apple Watch Series 8 ofrece funciones avanzadas de salud y bienestar, incluyendo seguimiento de sueño y monitoreo de la frecuencia cardíaca.'
    },
    {
      id: 11,
      nombre: 'Apple Watch SE',
      categoria: 'relojes',
      imagen: 'apple_watch_se_2024.jpg',
      precio: 249,
      img: 'https://http2.mlstatic.com/D_NQ_NP_878007-MLU73413452059_122023-O.webp',
      descripcion: 'El Apple Watch SE combina funcionalidad esencial con un diseño atractivo, ofreciendo seguimiento de actividad y notificaciones en tiempo real.'
    },
    {
      id: 12,
      nombre: 'Apple Watch Series 7',
      categoria: 'relojes',
      imagen: 'apple_watch_series_7.jpg',
      precio: 349,
      img: 'https://http2.mlstatic.com/D_NQ_NP_926476-MPE48888851493_012022-O.webp',
      descripcion: 'El Apple Watch Series 7 presenta una pantalla más grande y un diseño resistente al agua, ideal para todos los días y actividades deportivas.'
    }
  ];
  
function getData() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const success = true;
        
            if (success) {
                resolve(data);
              } else {
                reject('Error');
              }
          }, 2000);
    })
}

function getDataByCategory(category) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const success = true;
        
            if (success) {
              resolve(data.filter(element => element.categoria === category));
            } else {
              reject();
            }
          }, 2000);
    })
}

function getDataById(id) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const success = true;
        
            if (success) {
              resolve(data.find(element => element.id.toString() === id));
            } else {
              reject();
            }
          }, 2000);
    })
}

export { getData, getDataByCategory, getDataById }
