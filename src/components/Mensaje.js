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
    <div>
          {visible && (
        <div
          className="fixed top-0 right-0 m-4 p-4 bg-red-500 text-white rounded shadow"
          style={{ animation: 'slide-down 1s ease' }}
        >
          <p>{message}</p>
          <button
            className="ml-2 text-white font-semibold"
            onClick={handleClose}
          >
            X
          </button>
        </div>
      )}
    </div>
  )
}
