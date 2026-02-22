import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{

    @ApiProperty({example: 'test@mail.ru', description:'почтовый адрес'})
    readonly email: string;
    @ApiProperty({example: '1234', description:'пароль'})
    readonly password:string; 
}