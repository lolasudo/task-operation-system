import { ApiProperty } from "@nestjs/swagger";
import { Column, Table, DataType, Model, BelongsToMany } from "sequelize-typescript";
import { UserRoles } from "./user-roles.model";
import { User } from "../users/user.model";
interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {

  @ApiProperty({example: '1', description:'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }) 
  declare id: number;
  
  @ApiProperty({example: 'ADMIN', description:'значение роли полльзователя'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false }) 
  declare value: string;
  
  @ApiProperty({example: 'Администратор', description:'Описание роли'})
  @Column({ type: DataType.STRING, allowNull: false }) 
  declare description: string;


  @BelongsToMany(() => User,() => UserRoles)
  users:User[];

}