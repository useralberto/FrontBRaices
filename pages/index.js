import React, { useEffect, useState} from 'react';
import axios from 'axios';
import usePropiedades from '../hooks/usePropiedades';
import Head from 'next/head';
import { css } from '@emotion/react'
import useFiltro from '../hooks/useFiltro';
//import { css } from '@emotion/core';

export default function Home() {

  const [propiedades, guardarPropiedades ] = useState([]); 
  const [ filtradas, guardarFiltradas ] = useState([]);
  const { Propiedades } = usePropiedades(filtradas);
  const { FiltroUI, categoria } = useFiltro();

  useEffect(()=> {
    if(!categoria) {
      const obtenerPropiedades = async () => {
        const resultado = await axios.get('http://localhost:1337/propiedades');
        guardarPropiedades(resultado.data);
        guardarFiltradas(resultado.data);
      }
      obtenerPropiedades();
      return;
    }
    const filtradasArray = propiedades.filter( propiedades => propiedades.categoria.id == categoria );
    guardarFiltradas(filtradasArray);
  }, [categoria]);

  return (
    <article className="container py-5">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
        <title>Bienes raies con react y next js</title>
      </Head>


      <h1 
        css={
          css`
            text-align: center;
            font-family: 'Lato'
          `
        }
        className="pt-3" 
      >
        Nuestras Casas en venta
      </h1>
      
      <FiltroUI/>

      <Propiedades/>

    </article>
  )
}
