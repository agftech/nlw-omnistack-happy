import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import mapMakerImg from '../images/map-marker-happy.svg'

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
	return (
		<div id="page-map">
      <aside>
        <header>
          <img src={mapMakerImg} alt="Logo da plataforma Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Brasil</strong>
          <span>Brasil</span>
        </footer>
      </aside>

			<div></div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
	);
}

export default OrphanagesMap;
