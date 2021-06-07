import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PropiedadesOne() {

  const router = useRouter();
  const { pid } = router.query;

  const [ entrada, guardarEntradas ] = useState([]);

  useEffect(()=> {
    if(pid){
      const ObtenerEntrada = async () => {
        const resultItem = await axios.get(`http://localhost:1337/propiedades/${pid}`);
        guardarEntradas([resultItem.data]);
      };
      ObtenerEntrada();
    }
  }, [pid]);

  return (
    <article className="container py-5">
      {entrada.map( entry => (
        <section 
          key={entry.id}
        >
          <h1 className="py-3">{entry.nombre}</h1>
          <p className="py-4">{entry.Descripcion}</p>
          <p className="py-3">Imagenes</p>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            { entry.Imagen.map( img =>  (
              <section 
                className="col" 
                key={img.id}
              >
                <img 
                  className="img-fluid" 
                  src={`http://localhost:1337${img.url}`} 
                  alt={img.name} 
                />
              </section> 
            )) }
          </div>
        </section>
      ))}
    </article>
  );
}


