import { Table, Column, Model, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Student from './Student';
import User from './User';

@Table
class Parent extends Model {
    @Column
    firstName!: string;

    @Column
    lastName!: string;

    @Column
    email!: string;

    @Column
    phone!: string;
    
    @Column
    address!: string;

    @HasMany(() => Student)
    students!: Student[];

    @ForeignKey(()=> User)
    @Column
    userId!: number;
    @BelongsTo(() => User)
    user!: User;

}

export default Parent;