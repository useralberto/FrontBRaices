import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useFiltro = () => {

	const [categorias, guardarCategorias ] = useState([]);
	const [categoria, guardarCategoria] = useState('');

	useEffect(() => {
		const obtenerCategorias = async () => {
			const resultado = await axios.get('http://localhost:1337/categorias');
			guardarCategorias(resultado.data);
		} 
		obtenerCategorias();
	}, []);

	const FiltroUI = () =>(
		<form className="py-5 col-md-3">
			<select 
				onChange={ e => guardarCategoria(e.target.value) }
				value={categoria}
				className="form-select"
			>
				<option value=""> Seleccione una opción</option>
				{ categorias.map( opcion => (
					<option 
						value={opcion.id}
						key={opcion.id}
					> 
						{opcion.nombre}
					</option>
				))}
			</select>
		</form>
	);

	return {
		FiltroUI,
		categoria
	}

}
export default useFiltro;
