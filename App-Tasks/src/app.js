import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import TasksRoutes from './routes/tasks.routes'

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
const corsOptions = {};
app.use(cors(corsOptions))  //para poder pedir desde cualquier servidor
app.use(morgan('dev'));  //imprime por consola petición realizada
app.use(express.json());  //para que pueda interpretar jsons de los req
app.use(express.urlencoded({extended: false})); //para interpretar peticiones por url

//Routes
app.get('/', (req, res) =>{
    res.json({mensaje: 'hola bienvenido'})
});

app.use('/api/tasks',TasksRoutes);

export default app;