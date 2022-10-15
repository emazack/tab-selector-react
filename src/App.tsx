import React, { useState } from 'react';
import './App.css';

interface City {
  id: number;
  name: string;
  isFavourite: boolean;
}

const CITIES: City[] = [
  { id: 1, name: 'Trieste', isFavourite: false},
  { id: 2, name: 'Milano', isFavourite: true},
  { id: 3, name: 'Rome', isFavourite: true},
];

function App() {
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const url = 'https://www.mapquestapi.com/staticmap/v5/map?key=Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn&size=200,100&center=' + currentCity?.name;

  function viewMap(city: City) {
    setCurrentCity(city);
  }

  return (
    <div className="App">
      {
        CITIES.map(city => {
          const activeStyle = { color: city.id === currentCity?.id ? 'red' : 'black' }
          return <button key={city.id} style={activeStyle} onClick={() => viewMap(city)}>{city.isFavourite ? "❤︎" : null}{city.name}</button>
        })
      }
        <hr/>
        {currentCity?.isFavourite ? "❤︎" : null}{currentCity?.name}
        <div className='image-container'>
        {currentCity && <img width={200} height={100} src={url} alt=""/>}
        </div>
    </div>
  );
}

export default App;