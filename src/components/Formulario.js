import React, { useState } from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import usePais from '../hooks/usePais';
import PropTypes from 'prop-types';
import Error from './Error'


const Formulario = ({ setCategoria, setPaisSeleccionado }) => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' }
    ]

    const PAISES = [
        { value: 'ar', label: 'Argentina' },
        { value: 'au', label: 'Australia' },
        { value: 'be', label: 'Belgium' },
        { value: 'br', label: 'Brazil' },
        { value: 'Ca', label: 'Canada' },
        { value: 'cn', label: 'China' },
        { value: 'co', label: 'Colombia' },
        { value: 'de', label: 'Germany' },
        { value: 'us', label: 'United States' },
    ]

    const [categoria, SelectNoticas] = useSelect('', OPCIONES)

    const [pais, SelectPais] = usePais('', PAISES);

    const [error, setError] = useState(false);

    const buscarNoticia = e => {
        e.preventDefault();

        //validar si seleccionò algo 

        if (pais === '' || categoria === '') {
            //ccargar el error
            setError(true);
            return;
        }

        //pasar los datos al componente principal al app
        setError(false);
        setCategoria(categoria);
        setPaisSeleccionado(pais);
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticia}
                >
                    {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
                    <h2 className={styles.heading}>Encuentra Noticias por categoria y pais</h2>
                    <div className="input-field col s12">
                        <SelectPais />
                        <SelectNoticas />
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired,
    setPaisSeleccionado: PropTypes.func.isRequired,
}


export default Formulario;