import { Table, Column, Model, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import Student from './Student';
import Subject from './Subject';

@Table
class Marksheet extends Model {
  @ForeignKey(() => Student)
  @Column
  studentId!: number;

  @BelongsTo(() => Student)
  student!: Student;

  @ForeignKey(() => Subject)
  @Column
  subjectId!: number;

  @BelongsTo(() => Subject)
  subject!: Subject;

  @Column(DataType.FLOAT)
  marks!: number;

  @Column(DataType.STRING)
  grade!: string;

  @Column(DataType.DATE)
  examDate!: Date;
}

export default Marksheet;
