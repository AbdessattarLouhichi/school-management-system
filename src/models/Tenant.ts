import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import College from './College';

@Table
class Tenant extends Model {
  @Column
  name!: string;

  @Column
  subscriptionType!: string;

  @HasMany(() => College)
  colleges!: College[];
}

export default Tenant;