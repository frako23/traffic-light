import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("rojo");
	const [purpura,setPurpura] = useState(false);

	return (
		<><div className="caja1">
		</div>
		<div className={((purpura === true) ? "caja3" : "caja2")}>
			<br />
			<a href="#"><div 
			onClick={() => setSelectedColor("rojo")}
			className={"rojo"+((selectedColor === "rojo") ? " encendida" : "")}></div></a>
			<a href="#"><div 
			onClick={() => setSelectedColor("amarillo")}
			className={"amarillo"+((selectedColor === "amarillo") ? " encendida" : "")}></div></a>
			<a href="#"><div 
			onClick={() => setSelectedColor("verde")}
			className={"verde"+((selectedColor === "verde") ? " encendida" : "")}></div></a>
			{purpura === true ? (
			<a href="#"><div 
			className="morado"></div></a>) : null}
		</div>
		<br />
		<button 
		onClick={(event) => {
			if (selectedColor ==='rojo') {
				setSelectedColor('amarillo')
			} else if (selectedColor === 'amarillo') {
				setSelectedColor('verde')				
			} else if (selectedColor === 'verde'){
				setSelectedColor('rojo')
			}							
		}}
		type="button" class="btn btn-secondary m-5">Cambio</button>
		<br />
		<button 
		onClick={() => setPurpura(true)}
		type="button" class="btn btn-secondary mx-5">Purpura</button>
		<br />
		<button 
		onClick={() => setPurpura(false)}
		type="button" class="btn btn-secondary m-5">Purpura Reset</button>

		</>
	);
};

export default Home;
