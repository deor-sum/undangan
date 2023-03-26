import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
const icon = new L.icon({
  iconUrl: "./images/marker.svg",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

const Map = () => {
  const position = [-8.119752, 115.125557];
  return (
    <MapContainer
      style={{ height: "50vh", width: "100%" }}
      center={position}
      zoom={14}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlZWhhbiIsImEiOiJjanplM2VrMWcwMXEwM25wdXVxMzNyOHVuIn0.JTB2seU1gbbbXloPGSLogw"
      />
      <Marker position={position} icon={icon}>
        <Popup>LOKASI UPACARA</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
