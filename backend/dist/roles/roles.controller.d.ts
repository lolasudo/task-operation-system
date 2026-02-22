import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/creat-role.dto';
export declare class RolesController {
    private roleSevice;
    constructor(roleSevice: RolesService);
    create(dto: CreateRoleDto): Promise<import("./roles.model").Role>;
    getByValue(value: string): Promise<import("./roles.model").Role | null>;
}
