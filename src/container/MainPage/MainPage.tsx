import React, { useEffect, useState } from 'react';

function MainPage() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    checkGeolocation();
  }, []);

  const checkGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      return null;
    }
  };

  const showPosition = (position: any) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h2>{latitude}</h2>
      <h2>{longitude}</h2>
    </div>
  );
}

export default MainPage;
