import React from "react";

import "./styles/global.css";
import "./styles/pages/landing.css";

import logoImg from "./images/logo.svg";

function App() {
	return (
		<div id='page-landing'>
			<div className='content-wrapper'>
				<img src={logoImg} alt='Logo da plataforma Happy' />

				<main>
					<h1>Leve felicidade para o mundo</h1>
					<p>Visite orfanatos e mude o dia de muitas crianças.</p>
				</main>

				<div className='location'>
					<strong>Brasil</strong>
					<span>Brasil</span>
				</div>

				<a href="" className='enter-app'>
          :)
        </a>
			</div>
		</div>
	);
}

export default App;
