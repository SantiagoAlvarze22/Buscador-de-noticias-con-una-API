import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  //definir la categoria 
  const [categoria, setCategoria] = useState('');

  return (


    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
