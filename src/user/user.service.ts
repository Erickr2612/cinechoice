import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userModel: typeof User) {}

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async findOne(id: number): Promise<User> {
        return this.userModel.findByPk(id);
    }

    async create(user: Partial<User>): Promise<User> {
        return this.userModel.create(user);
    }


    async remove(id: number): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
    }
}