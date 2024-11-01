import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Teacher from './Teacher';
import Subject from './Subject';

@Table
class Exam extends Model {
  @Column({
    allowNull: false,
    unique: true
  })
  title!: string;

  @Column
  startTime!: Date;

  @Column
  endTime!: Date;

  @ForeignKey(() => Subject)
  @Column
  subjectId!: number;

  @BelongsTo(() => Subject)
  subject!: Subject;

  @ForeignKey(() => Teacher)
  @Column
  teacherId!: number;

  @BelongsTo(() => Teacher)
  teacher!: Teacher;
}

export default Exam;
