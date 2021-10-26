import { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { features } from "../../shared/data/data";

function Map({ location, selectedLocation, handleSelectLocation }) {
  console.log(handleSelectLocation);
  const coordinates = features.map((item) => ({
    longitude: item.longitude,
    latitude: item.latitude,
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 12,
    ...center,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/nonsense27/cktqqwuol3gva17qo3emf1nmn"
      mapboxApiAccessToken="pk.eyJ1Ijoibm9uc2Vuc2UyNyIsImEiOiJja3RxcXJ4cmYwejZoMm9wOTVydzJwbHZyIn0.aIE2YX_BbDW7MYWVSqihPQ"
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
      onLoad={() => console.log("MAP LOADED")}
    >
      {location && (
        <Marker
          longitude={location.longitude}
          latitude={location.latitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p
            className="cursor-pointer text-2xl animate-bounce"
            // onClick={() => handleSelectLocation(item)}
          >
            📌
          </p>
        </Marker>
      )}
      {features.map((item) => (
        <div key={item.longitude}>
          <Marker
            longitude={item.longitude}
            latitude={item.latitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              className={`cursor-pointer scale-100  transition-all transform duration-300 ease-out text-2xl animate-bounce ${
                selectedLocation?.longitude === item.longitude && "text-4xl"
              }`}
              onClick={() => handleSelectLocation(item)}
            >
              📲
            </p>
          </Marker>
          {selectedLocation?.longitude === item.longitude ? (
            <Popup
              closeOnClick={true}
              // onClose={() => handleSelectLocation({})}
              latitude={item.latitude}
              longitude={item.longitude}
              className="-mt-4"
            >
              <p className="text-xs mx-2">{item.title}</p>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
