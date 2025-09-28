import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../service/users.service';
import { CreateUserDto, Gender, UpdateUserDto } from '../../dtos/user.dto';

describe('UsersController', () => {
    let controller: UsersController;
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService],
        }).compile();

        controller = module.get<UsersController>(UsersController);
        service = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should create a user', () => {
        const dto: CreateUserDto = {
            firstname: 'John',
            lastname: 'Doe',
            dob: '01012000',
            gender: Gender.Male,
        };

        const result = controller.createUser(dto);
        expect(result).toHaveProperty('id');
        expect(result.firstname).toBe('John');
    });

    it('should get users', () => {
        service.createUser({
            firstname: 'Jane',
            lastname: 'Doe',
            dob: '02022000',
            gender: Gender.Female,
        });

        const users = controller.getUsers();
        expect(users.length).toBeGreaterThan(0);
    });

    it('should update a user', () => {
        const created = service.createUser({
            firstname: 'Mark',
            lastname: 'Smith',
            dob: '03032000',
            gender: Gender.Male,
        });

        const updateDto = { firstname: 'Marcus' };

        const updated = controller.updateUser(created.id, updateDto as UpdateUserDto);

        expect(updated.firstname).toBe('Marcus');
        expect(updated.updatedTimeStamp).toBeDefined();
    });

    it('should delete a user', () => {
        const created = service.createUser({
            firstname: 'Anna',
            lastname: 'Bell',
            dob: '04042000',
            gender: Gender.Female,
        });

        const resp = controller.deleteUser(created.id);

        expect(resp).toEqual({ status: 200, message: 'User deleted successfully' });
    });
});
