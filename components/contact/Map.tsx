import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

const Map = () => {
  let position = [9.02175, 38.83958];
  let zoom = 13;
  useEffect(() => {
    import('leaflet').then((L) => {
      const DefaultIcon = L.icon({
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
      L.Marker.prototype.options.icon = DefaultIcon;
    });
  }, []);

  const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
  );
  const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
  );
  const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false }
  );
  const Popup = dynamic(
    () => import('react-leaflet').then((mod) => mod.Popup),
    { ssr: false }
  );

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden py-5">
      <MapContainer center={position} zoom={zoom} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>We are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
