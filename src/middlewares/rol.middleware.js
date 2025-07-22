import Login from '../model/login.m.js';

// Middleware para verificar si el usuario es admin
export const esAdmin = async (req, res, next) => {
    try {
        // Se asume que el usuario ya está autenticado y su id está en req.userId
        const userId = req.userId || (req.user && req.user.id);
        if (!userId) {
            return res.status(401).json({ message: 'No autenticado' });
        }
        const user = await Login.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        if (user.rol !== 'admin') {
            return res.status(403).json({ message: 'Acceso denegado: solo administradores' });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: 'Error en la verificación de rol' });
    }
};

// Middleware para permitir solo usuarios normales (no admin)
export const esUsuario = async (req, res, next) => {
    try {
        const userId = req.userId || (req.user && req.user.id);
        if (!userId) {
            return res.status(401).json({ message: 'No autenticado' });
        }
        const user = await Login.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        if (user.rol !== 'usuario') {
            return res.status(403).json({ message: 'Acceso denegado: solo usuarios normales' });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: 'Error en la verificación de rol' });
    }
}; 