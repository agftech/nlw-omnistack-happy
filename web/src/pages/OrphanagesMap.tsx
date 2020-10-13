import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Map, TileLayer  } from 'react-leaflet';

import mapMakerImg from '../images/map-marker-happy.svg'

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
	return (
		<div id="page-map">
      <aside>
        <header>
          <Link to='/' className='enter-app'>
            <img src={mapMakerImg} alt="Logo da plataforma Happy" />
          </Link>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Brasil</strong>
          <span>Brasil</span>
        </footer>
      </aside>

			<Map center={[-23.6821604, -46.8754915]}
        zoom={10}
        style={{ width: "100%", height: "100%" }}
      >
        {/*sample: `https://a.tile.openstreetmap.org/{z}/{x}/{y}.png` */}
        <TileLayer 
          url={
            `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
          }
        />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
	);
}

export default OrphanagesMap;
