import { Table, Column, Model, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import Teacher from './Teacher';
import Student from './Student';
import Lesson from './Lesson';
import College from './College';
import Event from './Event';
import Annoucement from './Annoucement';

@Table 
class Class extends Model {

    @Column({
        allowNull: false,
        unique: true
    })
    name!: String;

    @Column
    capacity!: Number;

    @ForeignKey(() => College)
    @Column
    collegeId!: number;
  
    @BelongsTo(() => College)
    college!: College;

    @HasMany(() => Student)
    students!: Student[];
    
    @HasMany(() => Teacher)
    teachers!: Teacher[];

    @HasMany(() => Lesson)
    lessons!: Lesson[];

    @HasMany(() => Event)
    events!: Event[];

    @HasMany(() => Annoucement)
    announcements!: Annoucement[];
}

export default Class