import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    const [state, setState] = useState('');

    const SelectNoticas = () => (
        <select
            className="browser-default"
        >
            <option value="">--Seleccionar--</option>
        </select>
    )

    return [state, SelectNoticas];
}

export default useSelect;