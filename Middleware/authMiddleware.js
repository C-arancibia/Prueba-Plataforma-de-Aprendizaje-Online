// Ejemplo de middleware de autenticación
function authenticate(req, res, next) {
    // Aquí se puede implementar la lógica de autenticación, por ejemplo:
    const authToken = req.headers.authorization;
  
    if (!authToken) {
      return res.status(401).json({ error: 'No autorizado. Falta token de autenticación.' });
    }
  
    // Aquí se puede verificar el token, decodificarlo, validar contra la base de datos, etc.
  
    // Si la autenticación es exitosa, se puede establecer datos en el objeto `req` y llamar a `next()`
    req.user = { userId: 1, username: 'exampleUser' }; // Ejemplo de datos de usuario autenticado
    next();
  }
  
  module.exports = {
    authenticate
  };
  