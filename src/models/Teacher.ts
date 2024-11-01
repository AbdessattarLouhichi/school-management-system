import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo, Unique } from 'sequelize-typescript';
import College from "./College";
import User from "./User";
import Subject from './Subject';
import Class from './Class';
import Lesson from './Lesson';

@Table
class Teacher extends Model {
  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @Column(DataType.STRING)
  photo!: string;

  @Column({
    allowNull: false,
    unique: true
  })
  email!: string;

  @Column
  phone!: string;

  @Column
  address!: string;

  @Column
  gender!: string;

  @Column(DataType.DATE)
  dateOfBirth!: Date;

  @HasMany(() => Class)
  classes!: Class[];

  @HasMany(() => Subject)
  subjects!: Subject[];

  @HasMany(() => Lesson)
  lessons!: Lesson[];

  @ForeignKey(() => College)
  @Column
  collegeId!: number;

  @BelongsTo(() => College)
  college!: College;

  @ForeignKey(()=> User)
    @Column
    userId!: number;
    @BelongsTo(() => User)
    user!: User;

}

export default Teacher;
