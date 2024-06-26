// Ejemplo de middleware para manejo de errores
function errorHandler(err, req, res, next) {
    console.error('Error:', err);
  
    // Determinar el código de estado HTTP adecuado
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
  
    // Enviar respuesta de error al cliente
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? 'Error en producción' : err.stack
    });
  }
  
  module.exports = errorHandler;
  