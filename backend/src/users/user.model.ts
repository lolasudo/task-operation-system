import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { Column, Table, DataType, Model, BelongsToMany } from "sequelize-typescript";
interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({example: '1', description:'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  declare id: number;  
  
  @ApiProperty({example: 'test@mail.ru', description:'почтовый адрес'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  declare email: string;  
  
  @ApiProperty({example: '1234', description:'пароль'})
  @Column({ type: DataType.STRING, allowNull: false })
  declare password: string;  
  
  @ApiProperty({example: 'true', description:'Забанен или нет'})
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  declare banned: boolean;  

  @ApiProperty({example: 'За хулиганство', description:'Причина блокировки'})
  @Column({ type: DataType.BOOLEAN, allowNull: true })
  declare banReason: string;  

  @BelongsToMany(() => Role,() => UserRoles)
    roles:Role[];
  
}