import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'

const Formulario = () => {

    const [categoria, SelectNoticas] = useSelect('')

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Encuentra Noticias por categoria</h2>
                    <div className="input-field col s12">
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

export default Formulario;