import React, { useState } from "react";
import Carrusel from '../components/carrusel';
import Nav from '../components/Nav';
import NavBar from '../components/navBar';
import Page from '../components/Page';
import PlaceHolders from '../components/Placeholders';



function App() {
    return (
      <div>
        <Carrusel />
        <hr></hr>
        <Nav />
        <hr></hr>
        <NavBar />
        <hr></hr>
        <Page />
        <hr></hr>
        <PlaceHolders />

        </div>
  );
}

export default App;