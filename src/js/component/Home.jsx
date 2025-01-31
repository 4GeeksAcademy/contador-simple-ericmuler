import React from "react";
import {ContadorDeSegundos} from './ContadorDeSegundos.jsx';



//create your first component
const Home = () => {
	return (
		<div className="container ">
			<div className="d-flex justify-content-center mt-5">
				<h1 className="head">Ya estas<ContadorDeSegundos/> segundos mas cerca de la muerte</h1>
			</div>
			
		</div>
		
	);
};

export default Home;