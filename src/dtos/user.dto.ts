import { IsNotEmpty, Matches, IsEnum, IsUUID } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export enum Gender {
    Male = 'male',
    Female = 'female',
    DoNotWishToSpecify = 'do not wish to specify',
}

export class CreateUserDto {
    @ApiProperty({ example: 'John', description: 'First name of the user' })
    @IsNotEmpty()
    @Matches(/^[A-Za-z ]+$/, { message: 'Firstname can contain only alphabets and spaces' })
    firstname: string;

    @ApiProperty({ example: 'Doe', description: 'Last name of the user' })
    @IsNotEmpty()
    @Matches(/^[A-Za-z ]+$/, { message: 'Lastname can contain only alphabets and spaces' })
    lastname: string;

    @ApiProperty({ example: '01-01-2000', description: 'Date of birth (dd-mm-yyyy)' })
    @IsNotEmpty()
    dob: string;

    @ApiProperty({ enum: Gender, example: Gender.Male })
    @IsEnum(Gender, { message: 'Gender must be male, female or do not wish to specify' })
    gender: Gender;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        example: '550e8400-e29b-41d4-a716-446655440000',
        description: 'User UUID',
    })
    @IsUUID()
    id: string;
}
