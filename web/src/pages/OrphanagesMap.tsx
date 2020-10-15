import React, { useEffect, useState } from "react";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup  } from 'react-leaflet';

import mapMakerImg from '../images/map-marker-happy.svg'

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  console.log(orphanages);

  useEffect(() => {
		api.get("orphanages").then((response) => {
      setOrphanages(response.data);
		});
  }, []);
  
	return (
		<div id="page-map">
      <aside>
        <header>
          <Link to='/' className='enter-app'>
            <img src={mapMakerImg} alt="Logo da plataforma Happy" />
          </Link>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :]</p>
        </header>

        <footer>
          <strong>Brasil</strong>
          <span>Brasil</span>
        </footer>
      </aside>

			<Map center={[-27.2175287, -49.6344984]}
        zoom={18}
        style={{ width: "100%", height: "100%" }}
      >
        {/*sample: `https://a.tile.openstreetmap.org/{z}/{x}/{y}.png` */}
        <TileLayer 
          url={
            `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
          }
        />
        {orphanages.map(orphanage => {
              return (
                <Marker
                key={orphanage.id}
                icon={mapIcon} 
                position={[orphanage.latitude, orphanage.longitude]}
              >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                    {orphanage.name}
                  <Link to={`/orphanages/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#FFF"/>
                  </Link>
                </Popup>
              </Marker>
              )
            }
          )
        }
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
	);
}

export default OrphanagesMap;