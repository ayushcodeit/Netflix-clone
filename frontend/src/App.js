import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Row from './components/Row';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Row title="Trending Now" fetchUrl="/api/trending" />
      <Row title="Action Movies" fetchUrl="/api/movies/28" />
      <Row title="Comedy Movies" fetchUrl="/api/movies/35" />
      {/* Add more rows as needed */}
    </div>
  );
}

export default App;