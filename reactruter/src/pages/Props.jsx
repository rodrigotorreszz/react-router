import { useState } from 'react';
import Card from '../components/Card';

function App() {
  return (
    <>
      <h1>¡Información Personal Con Props!</h1>
      <Card 
        titulo="Rodrigo Leonel Torres Escobar"
        infomacion="Tengo 18 años, nací el 4 de enero del 2007"
        estudios="Estudios en educación primaria y bachillerato técnico"
        anexo="Me gusta bailar, nadar, leer y escuchar música"
      />
    </>
  );
}

export default App;
