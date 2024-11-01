import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Student from './Student';
import Subject from './Subject';
import Exam from './Exam';

@Table
class Result extends Model {
  @Column({
    allowNull: false
  })
  score!: number;

  @ForeignKey(()=> Exam)
  @Column
  examId!: Number;

  @ForeignKey(() => Subject)
  @Column
  subjectId!: number;

  @BelongsTo(() => Subject)
  subject!: Subject;

  @ForeignKey(() => Student)
  @Column
  studentId!: number;

  @BelongsTo(() => Student)
  student!: Student;
}

export default Result;
