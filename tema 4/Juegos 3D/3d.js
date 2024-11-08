import { useCallback, useEffect, useState } from 'react';

export const useDeviceOrientation = () => {
  const [error, setError] = useState(null);
  const [orientation, setOrientation] = useState(null);

  const onDeviceOrientation = (event) => {
    setOrientation({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
    });
  };

  const revokeAccess = useCallback(() => {
    window.removeEventListener('deviceorientation', onDeviceOrientation);
    setOrientation(null);
  }, []);

  const requestAccessAsync = useCallback(async () => {
    if (!('DeviceOrientationEvent' in window)) {
      setError(new Error('Los eventos de orientación del dispositivo no son compatibles con tu navegador.'));
      return false;
    }

    // Manejar dispositivos iOS 13+
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permissionState = await DeviceOrientationEvent.requestPermission();
        if (permissionState !== 'granted') {
          setError(new Error('Permiso para acceder a la orientación del dispositivo denegado.'));
          return false;
        }
      } catch (err) {
        setError(new Error('Error al solicitar permiso para la orientación del dispositivo.'));
        return false;
      }
    }

    window.addEventListener('deviceorientation', onDeviceOrientation);
    return true;
  }, []);

  useEffect(() => {
    return () => {
      revokeAccess();
    };
  }, [revokeAccess]);

  return {
    orientation,
    error,
    requestAccess: requestAccessAsync,
    revokeAccess,
  };
};

