import React, { useState } from 'react';

const usePais = (stateInicial, opciones) => {

    const [state, setState] = useState(stateInicial);

    const SelectPais = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            <option value="">--Seleccione--</option>
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    )

    return [state, SelectPais];
}

export default usePais;