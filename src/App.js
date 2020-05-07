import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias'
import Spinner from './components/Spinner'
import axios from 'axios';

function App() {

  //definir la categoria 
  const [categoria, setCategoria] = useState('');
  const [paisSeleccionado, setPaisSeleccionado] = useState('');
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${paisSeleccionado}&category=${categoria}&apiKey=d7f409410d404810b2844dec84a6429d`
      const respuesta = await axios.get(url)

      setCargando(true)

      setTimeout(() => {
        //desactiva el spinner 
        setCargando(false);
        setNoticias(respuesta.data.articles)
      }, 3000);

    }
    consultarAPI();
  }, [categoria, paisSeleccionado])

  const componente = (cargando) ? <Spinner /> : <ListadoNoticias
    noticias={noticias} />

  return (


    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
          setPaisSeleccionado={setPaisSeleccionado}
        />
        {componente}
      </div>

    </Fragment>
  );
}

export default App;
