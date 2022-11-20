import { Router, Request, Response, NextFunction } from 'express';
import DatabaseError from '../models/errors/database.error.model';
import userRepository from '../repositories/user.repository';
//forma de configurar rotas no express

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers['authorization']);
  const users = await userRepository.findAllUsers();
  res.status(200).send({ users });
});

usersRoute.get(
  '/users/:uuid',
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
      const uuid = req.params.uuid;
      const user = await userRepository.findById(uuid);
      res.status(200).send(user);
    } catch (error) {
    next(error);
    }
  }
);

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
  const newuser = req.body;
  const uuid = await userRepository.create(newuser);
  res.status(201).send(uuid);
});

usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifieduser = req.body;
  modifieduser.uuid = uuid;

  await userRepository.update(modifieduser);

  res.status(200).send(modifieduser); //pode ser o ao inves do modfieduser, vazio para segurança
});

usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  await userRepository.remove(uuid)
  res.sendStatus(200);
})

export default usersRoute;
