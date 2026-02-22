import { AddRoleDto } from '../roles/dto/add-role.dto';
import { UsersService } from './users.service';
import { Body, Controller, Post , Get, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { BanUserDto } from 'src/roles/dto/ban-user.dto';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService:UsersService){}

    @ApiOperation({summary:'Создание пользователя'})
    @ApiResponse({status:200,type:User})

    @Post()
    create(@Body()userDto:CreateUserDto){
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary:'Получение всех пользователей'})
    @ApiResponse({status:200,type:[User]})
    @UseGuards(JwtAuthGuard)
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }

    
    @ApiOperation({summary:'выдать роль'})
    @ApiResponse({status:200})
    @UseGuards(JwtAuthGuard)
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body()dto:AddRoleDto){
        return this.usersService.addRole(dto);
    }

     @ApiOperation({summary:'Забанить полльзователя'})
    @ApiResponse({status:200})
    @UseGuards(JwtAuthGuard)
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body()dto:BanUserDto){
        return this.usersService.ban(dto);
    }
}
