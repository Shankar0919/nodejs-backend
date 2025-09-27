import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto, UpdateUserDto } from '../../dtos/user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('users')
@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get('users')
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'List of users returned' })
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post('create-user')
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, description: 'User created successfully' })
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto);
    }

    @Put('update-user/:id')
    @ApiOperation({ summary: 'Update an existing user' })
    @ApiParam({ name: 'id', description: 'UUID of the user to update' })
    @ApiResponse({ status: 200, description: 'User updated successfully' })
    @ApiResponse({ status: 400, description: 'No field changed' })
    updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
        return this.usersService.updateUser(id, dto);
    }

    @Delete('delete-user/:id')
    @ApiOperation({ summary: 'Delete a user' })
    @ApiParam({ name: 'id', description: 'UUID of the user to delete' })
    @ApiResponse({ status: 200, description: 'User deleted successfully' })
    deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(id);
    }
}
