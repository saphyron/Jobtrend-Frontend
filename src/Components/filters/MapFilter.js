import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function MapFilter() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 56.1572, lng: 10.2107 }), []);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className="togglebnt" onClick={() => setIsVisible(!isVisible)}>
        Vælg fra kort
        <div id="map">
          {isVisible && (
            <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainer">
              <Marker position={center} />
            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  );
}
