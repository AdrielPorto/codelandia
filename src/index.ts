import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.routes';
import statusRoute from './routes/status.routes';
import errorHandler from './middleware/error-handler.middleware';
import authorizationRoute from './routes/authorization.routes';

const app = express();

app.use(express.json());

app.use(usersRoute);
app.use(statusRoute);
app.use(authorizationRoute);
//CONFIGURAÇÃO DOS HANDLERS DE ERROR
app.use(errorHandler);


app.listen(3000, () => {
  console.log('Estou funcionando na porta 3000');
});
