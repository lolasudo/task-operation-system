import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/creat-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { where } from 'sequelize';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository:typeof Role){

    }

    async creatRole(dto:CreateRoleDto){
        const role = await this.roleRepository.create(dto);
        return role;
    }

    async getRoleByValue(value:string){
 const role = await this.roleRepository.findOne({where:{value}});
        return role;
    }
}
