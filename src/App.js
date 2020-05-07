import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias'
import axios from 'axios';

function App() {

  //definir la categoria 
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=d7f409410d404810b2844dec84a6429d`
      const respuesta = await axios.get(url)
      setNoticias(respuesta.data.articles)
    }
    consultarAPI();
  }, [categoria])

  return (


    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>

    </Fragment>
  );
}

export default App;
