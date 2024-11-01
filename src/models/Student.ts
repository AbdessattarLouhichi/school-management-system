import { Table, Model, Column, ForeignKey, BelongsTo, DataType, HasMany } from "sequelize-typescript";
import College from "./College";
import User from "./User";
import Parent from "./Parent";
import Class from "./Class";
import Result from "./Result";
import Attendance from "./Attendance";

@Table
class Student extends Model{
    @Column
    firstName!: string;

    @Column
    lastName!: string;

    @Column({
        allowNull: false,
        unique: true
      })
    email!: string;

    @Column(DataType.STRING)
    photo!: string;

    @Column
    gender!: string;
  
    @Column(DataType.DATE)
    dateOfBirth!: Date;
  
    @ForeignKey(()=>College)
    @Column
    collegeId!: number
    @BelongsTo(()=>College)
    college!: College;

    @ForeignKey(()=>Class)
    @Column
    classId!: number
    @BelongsTo(()=>Class)
    class!: Class;
    
    @HasMany(() => Attendance)
    attendances!: Attendance[];

    @HasMany(() => Result)
    results!: Result[];

    @Column
    grade!: string;
  
    @Column
    phone!: number;

    @Column
    address!: string;
  
    
    @ForeignKey(() => Parent)
    @Column
    parentId!: number;
  
    @BelongsTo(() => Parent)
    parent!: Parent;

   
    @ForeignKey(()=> User)
    @Column
    userId!: number;
    @BelongsTo(() => User)
    user!: User;

}
export default Student;