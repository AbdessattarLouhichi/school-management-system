import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import bcrypt from 'bcryptjs';
import { Role } from '../config/Roles';
import College from "./College";

@Table
class User extends Model {
  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @Column({
    allowNull: false,
    unique: true
  })
  email!: string;

  @Column
  password!: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(Role),
  })
  role!: Role;

  @HasMany(() => College)
  colleges!: College[];

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

export default User;