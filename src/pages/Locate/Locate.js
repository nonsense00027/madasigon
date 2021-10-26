import { getDistance } from "geolib";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Map from "./Map";
import Repairs from "./Repairs";
import {
  database,
  onSnapshot,
  collection,
  query,
} from "../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../shared/utilities";

function Locate() {
  const [location, setLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [shops, setShops] = useState([]);

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

  useEffect(() => {
    const q = query(collection(database, "shops"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setShops(querySnapshot.docs.map((doc) => collectIdsAndDocs(doc)));
    });
    return () => unsubscribe;
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
            features={shops}
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
