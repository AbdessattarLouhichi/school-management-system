import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Teacher from './Teacher';
import Subject from './Subject';
import Class from './Class';

@Table
class Lesson extends Model {
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

  @ForeignKey(()=>Class)
    @Column
    classId!: number
    @BelongsTo(()=>Class)
    class!: Class;
}

export default Lesson;
