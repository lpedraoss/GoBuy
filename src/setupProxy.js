import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = {
    // Otras configuraciones de Vite
  
    server: {
      proxy: {
        '/api': {
          target: 'https://646d4d739c677e232189e51a.mockapi.io',
          changeOrigin: true,
          secure: false,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
          onProxyRes: (proxyRes) => {
            proxyRes.headers['Access-Control-Allow-Origin'] = '*';
            proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
            proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type';
          },
        },
      },
    },
  };
  
//En el código anterior, hemos configurado un proxy inverso utilizando http-proxy-middleware para redirigir 
//todas las solicitudes que comiencen con /api a https://646d4d739c677e232189e51a.mockapi.io. Además, 
//hemos agregado los encabezados de CORS tanto en la configuración del proxy como en el evento onProxyRes, 
//lo que debería permitir las solicitudes desde cualquier origen.
  
//Reinicia el servidor de desarrollo de Vite para que la configuración del proxy y CORS surtan efecto.
  
//Con esta configuración, todas las solicitudes que comiencen con /api serán redirigidas al servidor de API de 
//https://646d4d739c677e232189e51a.mockapi.io y se agregarán los encabezados de CORS necesarios para permitir las solicitudes 
//desde cualquier origen.
  
//Recuerda ajustar la configuración del proxy según tus necesidades, como el destino y los encabezados de CORS 
//específicos que deseas utilizar.
  

// El archivo setupProxy.js se utiliza en aplicaciones creadas con Create React App (CRA) y en entornos de desarrollo locales. 
//Su propósito principal es permitir la configuración de un proxy para las solicitudes HTTP durante el desarrollo.

// Cuando desarrollas una aplicación de React, es común que el frontend realice solicitudes a un backend o a una API en un 
//servidor diferente. Sin embargo, debido a las restricciones de seguridad del navegador, las solicitudes a diferentes dominios 
//(origen cruzado) están limitadas por la política de mismo origen 
//(same-origin policy). Esto puede generar problemas al intentar realizar solicitudes a un servidor API en un dominio diferente 
//al del frontend.

// Para solucionar esto, CRA proporciona la opción de configurar un proxy mediante el archivo setupProxy.js. 
//Este archivo permite redirigir las solicitudes del frontend hacia el backend o la API especificada, evitando así los problemas 
//de seguridad del navegador.

// El archivo setupProxy.js define las reglas de proxy para redirigir las solicitudes. Puedes especificar una ruta de origen 
//en tu aplicación frontend y el destino al que deseas redirigir las solicitudes, que puede ser un servidor de desarrollo local 
//o un servidor remoto. El proxy se encargará de redirigir las solicitudes a través de un middleware adecuado, 
//lo que te permitirá realizar solicitudes a un servidor API en un dominio diferente al del frontend sin problemas de seguridad.