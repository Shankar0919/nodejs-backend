/* eslint-disable */

import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { User } from '../../interfaces/user.interface';
import { CreateUserDto, UpdateUserDto } from '../../dtos/user.dto';
import { transformDob } from '../../validators/dob.validator';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
    private users: Map<string, User> = new Map();

    private getTimestamp(): string {
        const now = new Date();
        const dd = String(now.getDate()).padStart(2, '0');
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const yyyy = now.getFullYear();
        const hh = String(now.getHours()).padStart(2, '0');
        const min = String(now.getMinutes()).padStart(2, '0');
        const ss = String(now.getSeconds()).padStart(2, '0');
        return `${dd}-${mm}-${yyyy}, ${hh}:${min}:${ss}`;
    }

    createUser(dto: CreateUserDto): User {
        const id = uuidv4();
        const user: User = {
            id,
            firstname: dto.firstname,
            lastname: dto.lastname,
            dob: transformDob(dto.dob),
            gender: dto.gender,
            createdTimeStamp: this.getTimestamp(),
        };
        this.users.set(id, user);
        return user;
    }

    getUsers(): User[] {
        return Array.from(this.users.values());
    }

    updateUser(id: string, dto: UpdateUserDto): User {
        if (!this.users.has(id)) {
            throw new NotFoundException('User not found');
        }
        const existing = this.users.get(id)!;
        let changed = false;
        const updated: User = { ...existing };

        if (dto.firstname && dto.firstname !== existing.firstname) {
            updated.firstname = dto.firstname;
            changed = true;
        }
        if (dto.lastname && dto.lastname !== existing.lastname) {
            updated.lastname = dto.lastname;
            changed = true;
        }
        if (dto.dob && transformDob(dto.dob) !== existing.dob) {
            updated.dob = transformDob(dto.dob);
            changed = true;
        }
        if (dto.gender && dto.gender !== existing.gender) {
            updated.gender = dto.gender;
            changed = true;
        }

        if (!changed) {
            throw new BadRequestException('No update required as there is no field change');
        }

        updated.updatedTimeStamp = this.getTimestamp();
        this.users.set(id, updated);
        return updated;
    }

    deleteUser(id: string): { status: number; message: string } {
        if (!this.users.has(id)) {
            throw new NotFoundException('User not found');
        }
        this.users.delete(id);
        return { status: 200, message: 'User deleted successfully' };
    }
}
