import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Teacher from './Teacher';

@Table
class Subject extends Model {
  @Column({
    allowNull: false,
    unique: true
  })
  name!: string;

  @Column
  subject_code!: string;

  @Column
  description!: string;

  @ForeignKey(() => Teacher)
  @Column
  teacherId!: number;

  @BelongsTo(() => Teacher)
  teacher!: Teacher;
}

export default Subject;
