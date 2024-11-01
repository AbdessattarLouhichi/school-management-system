import { Table, Column, Model, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import Tenant from './Tenant';
import Student from './Student';
import User from './User';
import Teacher from './Teacher';
import Class from './Class';

@Table
class College extends Model {
  @Column({
    allowNull: false,
    unique: true
  })
  name!: String;

  @Column
    phone!: Number;

  @Column
    address!: String;
  
  @ForeignKey(()=> User)
  @Column
  userId!: Number;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => Tenant)
  @Column
  tenantId!: Number;

  @BelongsTo(() => Tenant)
  tenant!: Tenant;

  
  @HasMany(() => Class)
  classes!: Class[];

  @HasMany(() => Student)
  students!: Student[];

  @HasMany(() => Teacher)
  teachers!: Teacher[];
}

export default College;