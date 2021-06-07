import React from 'react'
import styled from '@emotion/styled';
import { css } from '@emotion/react'

const Img = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	top: 0px;
	left: 0px;
`;

const DivCol = styled.div`
	overflow: hidden;
	position: relative;
`;

const usePropiedades = ( propiedades ) => {
	const Propiedades = () => (
		<section className="row row-colums-1 row-cols-md-2  row-cols-lg-4 g-3">
			{ propiedades.map(item => (
				<DivCol 
					key={item.id} 
					className="col"
				>
					<section 
						className="card"
						css={
							css`
								border-radius: 5px;
								overflow: hidden;
							`
						}
					>
						<div 
							className="card-head"
							css={
								css` 
									min-height: 200px;
									position:relative;
									overflow: hidden;
								`
							}
						>
							<Img src={`http://localhost:1337${item.Imagen[0].url}`} alt="Imagen"  className="img-fluid"/>
						</div>
						<div className="card-body">
							<h2 
								css={
									css`
										font-size:20px;
									`
								}
								className="py-3"
							>
								<a 
									css={
										css`
											text-decoration:none;
										`
									}
									href={`/propiedad/${item.id}`}
								>
									{item.nombre}
								</a>
							</h2>
							<ul
								className="p-0 m-0 d-flex justify-content-around align-items-center flex-wrap"
								css={
									css`
										list-style: none;
									`
								}
							>
								<li className="my-2">
									<i className="bi bi-door-open"></i>
									<span>{item.Habitaciones}</span> 
								</li>
								<li className="my-2">
									<i className="bi bi-speedometer me-2"></i>
									<span>{item.Estacionamiento}</span>
								</li>
								<li className="my-2">
									<i className="bi bi-badge-wc me-2"></i>
									<span>{item.WC}</span>
								</li>
							</ul>
						</div>
					</section>
				</DivCol>
			)) }
		</section>
	)
	return {
		Propiedades
	}
}
export default usePropiedades;
