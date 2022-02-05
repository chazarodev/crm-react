import React from 'react';

const Alerta = ({children}) => {
    return (
        <div className='my-1 text-red-400 font-bold p-1 uppercase'>
            {children}
        </div>
    )
}

export default Alerta