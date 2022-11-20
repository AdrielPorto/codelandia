import { NextFunction, Request, Response, Router } from "express";
import forbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";

const authorizationRoute = Router();

authorizationRoute.post('/token', async (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers['authorization'];
  console.log(req.headers);
  try {
    if (!authorizationHeader) {
      throw new forbiddenError('Credenciais não informadas');
    }
    const [autenthicationType, token] = authorizationHeader.split(' ');

    if (autenthicationType !== 'Basic' || !token) {
      throw new forbiddenError('Tipo de Autenticação inválida');
    }
    const tokenContent = Buffer.from(token, 'base64').toString('utf-8');
    console.log(tokenContent);

    const [username, password] = tokenContent.split(':');
    console.log(username, password);

    if (!username || !password) {
      throw new forbiddenError('Credenciais não preenchidas');
    }
    const user = await userRepository.findByUsernameAndPassword(username, password);

    console.log(user);
  } catch (error) {
    next(error)
  }
});

export default authorizationRoute;