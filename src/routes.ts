import { Router } from 'express';
import { CreateUserCOntroller } from './controllers/createUserController';

const router = Router();

const creatUserController = new CreateUserCOntroller()

router.post("/users", creatUserController.handle);

export { router };