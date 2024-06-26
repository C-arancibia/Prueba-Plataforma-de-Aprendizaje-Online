const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const db = require('./db'); // Archivo de configuración de la base de datos
const app = express();

// Configuración de sesiones y mensajes flash
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// Configuración del motor de vistas Handlebars
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Middleware para parsear datos del formulario
app.use(express.urlencoded({ extended: false }));

// Archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const authRoutes = require('./controllers/authController');
const courseRoutes = require('./controllers/courseController');
const userRoutes = require('./controllers/userController');

app.use('/', authRoutes);
app.use('/courses', courseRoutes);
app.use('/users', userRoutes);

// Conexión a la base de datos y inicio del servidor
db.sync() // Sincroniza los modelos con la base de datos
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor iniciado en http://localhost:3000');
        });
    })
    .catch(err => console.error('Error al conectar con la base de datos:', err));

module.exports = app; // Exporta app para pruebas unitarias u otras configuraciones
