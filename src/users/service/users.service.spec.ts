import { UsersService } from './users.service';
import { CreateUserDto, Gender, UpdateUserDto } from '../../dtos/user.dto';
import { NotFoundException, BadRequestException } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  describe('createUser', () => {
    it('should create a user', () => {
      const dto: CreateUserDto = {
        firstname: 'John',
        lastname: 'Doe',
        dob: '01012000',
        gender: Gender.Male,
      };

      const user = service.createUser(dto);
      expect(user).toHaveProperty('id');
      expect(user.firstname).toBe('John');
      expect(user.dob).toBe('01-01-2000');
    });
  });

  describe('getUsers', () => {
    it('should return all users', () => {
      service.createUser({
        firstname: 'Jane',
        lastname: 'Smith',
        dob: '02022000',
        gender: Gender.Female,
      });

      const users = service.getUsers();
      expect(users.length).toBe(1);
    });
  });

  describe('updateUser', () => {
    it('should update fields when they change', () => {
      const created = service.createUser({
        firstname: 'Alice',
        lastname: 'Brown',
        dob: '03032000',
        gender: Gender.Female,
      });

      const updated = service.updateUser(created.id, { firstname: 'Alicia' } as UpdateUserDto);
      expect(updated.firstname).toBe('Alicia');
      expect(updated.updatedTimeStamp).toBeDefined();
    });

    it('should throw NotFoundException if id does not exist', () => {
      expect(() =>
        service.updateUser('non-existent-id', { firstname: 'X' } as UpdateUserDto),
      ).toThrow(new NotFoundException('User not found'));
    });

    it('should throw BadRequestException when DTO is empty', () => {
      const created = service.createUser({
        firstname: 'Bob',
        lastname: 'Marley',
        dob: '04042000',
        gender: Gender.Male,
      });

      expect(() => service.updateUser(created.id, {} as UpdateUserDto)).toThrow(
        new BadRequestException('No update required as there is no field change'),
      );
    });

    it('should throw BadRequestException when values are identical', () => {
      const created = service.createUser({
        firstname: 'Carl',
        lastname: 'Stone',
        dob: '05052000',
        gender: Gender.Male,
      });

      expect(() =>
        service.updateUser(created.id, {
          firstname: created.firstname,
          lastname: created.lastname,
          dob: created.dob,
          gender: created.gender,
        } as UpdateUserDto),
      ).toThrow(
        new BadRequestException('No update required as there is no field change'),
      );
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', () => {
      const created = service.createUser({
        firstname: 'Diana',
        lastname: 'Prince',
        dob: '06062000',
        gender: Gender.Female,
      });

      const resp = service.deleteUser(created.id);
      expect(resp).toEqual({ status: 200, message: 'User deleted successfully' });
    });

    it('should throw NotFoundException when deleting unknown user', () => {
      expect(() => service.deleteUser('fake-id')).toThrow(
        new NotFoundException('User not found'),
      );
    });
  });
});
