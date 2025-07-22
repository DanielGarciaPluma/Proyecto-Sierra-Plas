import jwt from 'jsonwebtoken';

export const autenticarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        return res.status(500).json({ message: 'JWT_SECRET no definido en variables de entorno' });
    }
    jwt.verify(token, secret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        req.userId = user.id;
        next();
    });
}; 