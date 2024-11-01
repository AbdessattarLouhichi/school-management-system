import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Student from './Student';
import Lesson from './Lesson';

@Table
class Attendance extends Model {
  @Column({
    allowNull: false,
    unique: true
  })
  date!: Date;

  @ForeignKey(() => Lesson)
  @Column
  lessonId!: number;

  @BelongsTo(() => Lesson)
  lesson!: Lesson;

  @ForeignKey(() => Student)
  @Column
  studentId!: number;

  @BelongsTo(() => Student)
  student!: Student;

  @Column
  status!: Boolean;

  @Column
  remark!: String;
  
}

export default Attendance;
