import User from 'src/user/entities/users.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
@Entity()
export default class TouristicArea {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ length: 30 })
  name!: string;

  @Column({ length: 300 })
  Description!: string;

  @Column()
  ImageUrl!: string;

  @ManyToMany(() => User, (user) => user.touristicAreas)
  users: User[];
}
