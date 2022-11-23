import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.routes';
import statusRoute from './routes/status.routes';
import errorHandler from './middlewares/error-handle.middlleware';
import authorizationRoute from './routes/authorization.routes';

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({ credentials: true, origin: `http://44.202.38.5:3000`, optionsSuccessStatus: 200 }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  app.use(cors());
  next();
})

app.use(usersRoute);
app.use(statusRoute);
app.use(errorHandler);
app.use(authorizationRoute);

app.listen(3000, () => {
  console.log('Estou funcionando');
});
