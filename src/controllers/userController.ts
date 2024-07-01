import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export class UserController {
    async getAll(req: Request, res: Response) {
        const users = await userService.getAll();
        res.json(users);
    }

    async getById(req: Request, res: Response) {
        const user = await userService.getById(Number(req.params.id));
        res.json(user);
    }

    async create(req: Request, res: Response) {
        const user = await userService.create(req.body);
        res.status(201).json(user);
    }

    async update(req: Request, res: Response) {
        const user = await userService.update(Number(req.params.id), req.body);
        res.json(user);
    }

    async delete(req: Request, res: Response) {
        await userService.delete(Number(req.params.id));
        res.status(204).end();
    }
}