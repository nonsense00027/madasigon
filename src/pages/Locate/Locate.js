import { getDistance } from "geolib";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Map from "./Map";
import Repairs from "./Repairs";

function Locate() {
  const [location, setLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  const calculateDistance = (destination) => {
    if (!location) return;
    return getDistance(location, destination, 1);
  };

  const handleSelectLocation = (item) => {
    setSelectedLocation(item);
  };

  return (
    <div className="">
      <Header />
      <main className="flex min-h-screen min-w-screen">
        <section className="min-h-screen w-full flex-1">
          <Map
            location={location}
            selectedLocation={selectedLocation}
            handleSelectLocation={handleSelectLocation}
          />
        </section>
        <section className="pt-20" style={{ width: 600 }}>
          <Repairs
            calculateDistance={calculateDistance}
            selectedLocation={selectedLocation}
            handleSelectLocation={handleSelectLocation}
          />
        </section>
      </main>
    </div>
  );
}

export default Locate;
