const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./db'); // Importa la instancia de Sequelize
const db = require('./models'); // Importa todos los modelos definidos
const app = express();

// Configuración de middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Establece las rutas de la aplicación
app.use('/', require('./routes')); // Ejemplo de configuración de rutas

// Sincroniza la base de datos y arranca el servidor
sequelize.sync()
  .then(() => {
    console.log('Base de datos conectada y sincronizada.');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar y sincronizar la base de datos:', error);
  });
