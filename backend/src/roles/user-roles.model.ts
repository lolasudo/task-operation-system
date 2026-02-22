import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany } from "sequelize";
import { Column, Table, DataType, Model, ForeignKey } from "sequelize-typescript";
import { Role } from "./roles.model";
import { User } from "src/users/user.model";
import { fail } from "assert";


@Table({ tableName: 'user_roles' ,createdAt:false,updatedAt:false})
export class UserRoles extends Model<UserRoles> {

 
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }) 
  declare id: number;
  
  @ForeignKey(()=>Role)
  @Column({ type: DataType.INTEGER }) 
  declare roleId: number;
  
  @ForeignKey(()=>User)
  @Column({ type: DataType.INTEGER}) 
  declare userId: number;



}