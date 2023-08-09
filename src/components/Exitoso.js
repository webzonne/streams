import React, { useState, useEffect } from 'react';

export default function Mensaje({message, onClose}) {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setVisible(false);
        }, 3000); // Mostrar el mensaje de error durante 3 segundos
    
        return () => clearTimeout(timeout);
      }, []);

      const handleClose = () => {
        setVisible(false);
        onClose();
      };
  return (
    <div className='relative'>
          {visible && (
        <div
          className="fixed z-20 top-0 right-0 m-4 p-4 bg-green-500 text-white rounded shadow"
          style={{ animation: 'slide-down 1s ease' }}
        >
          <p>{message}</p>
          <button
            className="absolute -top-3 -right-1 ml-2 text-gray-600 text-xl font-bold"
            onClick={handleClose}
          >
            X
          </button>
        </div>
      )}
    </div>
  )
}
