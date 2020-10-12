import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function OrphanagesMap() {
	return (
		<div>
			<h1>Orphanages Map</h1>
			<Link to='' className='enter-app'>
				<FiArrowLeft size={26} color='rgba(8, 0, 0, 0.6)' />
			</Link>
		</div>
	);
}

export default OrphanagesMap;
