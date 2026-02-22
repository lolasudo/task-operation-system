import { CreateRoleDto } from './dto/creat-role.dto';
import { Role } from './roles.model';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: typeof Role);
    creatRole(dto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role | null>;
}
