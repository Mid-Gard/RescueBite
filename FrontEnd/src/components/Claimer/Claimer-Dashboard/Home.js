import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./Home.css"

function Home() {
  return (
    <div className="homecontanor">
      <div className="mapcontanor">
        <MapContainer
          center={[51.505, -0.09]} // Initial center latitude and longitude
          zoom={13} // Initial zoom level
          style={{ width: "100%", height: "100%",borderRadius: "10px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
      <div className="sidebarr">
        <div className="sidecontent">
          <div className="sideHeading">Hotels Nearby</div>
          <div className="sideelements">Hotel 1</div>
          <div className="sideelements">Hotel 1</div>
          <div className="sideelements">Hotel 1</div>
          <div className="sideelements">Hotel 1</div>
          <div className="sideelements">Hotel 1</div>
          <div className="sideelements">Hotel 1</div>
          <div className="sideelements">Hotel 1</div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";

// import "leaflet/dist/leaflet.css";
// import "./Home.css";
// import busIcon1 from "./icons8-place-marker-100.png";
// import busIcon2 from "./icons8-place-marker-200.png";
// import busIcon3 from "./icons8-place-marker-300.png";
// import busIcon4 from "./icons8-place-marker-400.png";

// function Home() {
//   const [locations, setLocations] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       fetch("http://127.0.0.1:8000/location/location_dummy")
//         .then((response) => response.json())
//         .then((data) => setLocations(data));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const center = {
//     lat: locations[0]?.lat || 0,
//     lng: locations[0]?.lng || 0,
//   };

//   // Define the custom icons
//   const customIcon1 = new L.Icon({
//     iconUrl: busIcon1,
//     iconSize: [30, 30],
//     iconAnchor: [20, 20],
//   });

//   const customIcon2 = new L.Icon({
//     iconUrl: busIcon2,
//     iconSize: [30, 30],
//     iconAnchor: [20, 20],
//   });

//   const customIcon3 = new L.Icon({
//     iconUrl: busIcon3,
//     iconSize: [30, 30],
//     iconAnchor: [20, 20],
//   });

//   const customIcon4 = new L.Icon({
//     iconUrl: busIcon4,
//     iconSize: [30, 30],
//     iconAnchor: [20, 20],
//   });

//   return (
//     <div className="Home">
//       <div className="container">
//         {locations.length > 0 && (
//           <MapContainer center={center} zoom={15} className="map-container">
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//             />
//             {locations.map((location) => (
//               <Marker
//                 key={location.id}
//                 position={[location.lat, location.lng]}
//                 icon={
//                   location.id === 1
//                     ? customIcon1
//                     : location.id === 2
//                     ? customIcon2
//                     : location.id === 3
//                     ? customIcon3
//                     : customIcon4
//                 }
//               >
//                 <Popup>
//                   Vehicle Location: <br /> Lat: {location.lat}, Lng:{" "}
//                   {location.lng}
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;
