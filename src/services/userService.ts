import { getRepository } from "typeorm";
import { User } from '../entity/User';

export class UserService {
    private userRepository = getRepository(User);

    async getAll() {
        return this.userRepository.find();
    }

    async getById(id: number) {
        return this.userRepository.findOneBy({ id });
    }

    async create(user: User) {
        return this.userRepository.save(user);
    }

    async update(id: number, user: User) {
        await this.userRepository.update(id, user);
        return this.userRepository.findOneBy({ id });
    }

    async delete(id: number) {
        await this.userRepository.delete(id);
    }
}