import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Class from "./Class";

@Table
class Event extends Model{
    @Column({
        allowNull: false,
    })
    title!: String;

    @Column
    description!: String;

    @Column
    startTime!: Date;
  
    @Column
    endTime!: Date;
    
    @ForeignKey(() => Class)
    @Column
    classId!: number;
  
    @BelongsTo(() => Class)
    class!: Class;
}

export default Event