import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { NameProfession } from '../nameProfession/entity';

@Entity({
  name: 'names'
})
export class Name {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('date')
  birthDate: Date;

  @Column('date', { nullable: true })
  deathDate?: Date;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(() => NameProfession, (nameProfession) => nameProfession.profession)
  professions: NameProfession[]
}
