import express from "express";
import morgan from "morgan";
import cors from "cors";
import materialRoutes from './routes/material.routes.js';
import produccionRoutes from './routes/produccion.routes.js';
import ventaRoutes from './routes/venta.routes.js';
import precioRoutes from './routes/precio.routes.js';
import recetaRoutes from './routes/receta.routes.js';

const app = express();
//configuracion de puerto
app.set('port',process.env.PORT||3003);

// Configuración de CORS más específica y robusta
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3002', 'http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    optionsSuccessStatus: 200
}));

// Middleware adicional para manejar preflight requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
 
// Rutas
app.use('/api/material', materialRoutes);
app.use('/api/produccion', produccionRoutes);
app.use('/api/venta', ventaRoutes);
app.use('/api/precio', precioRoutes);
app.use('/api/receta', recetaRoutes);

export default app;