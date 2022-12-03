import TouristicArea from 'src/touristic-area/entities/touristicArea.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
@Entity()
export default class User {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ length: 30 })
  name!: string;

  @Column({ length: 15 })
  password!: string;

  @ManyToMany(() => TouristicArea, (touristicArea) => touristicArea.users, {
    cascade: true,
  })
  @JoinTable()
  touristicAreas: TouristicArea[];
}
