import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';

import { Name } from '../names';

export enum Profession {
    Actor = 'ACTOR',
    Actress = 'ACTRESS',
    Producer = 'PRODUCER',
    Director = 'DIRECTOR',
    Miscellaneous = 'MISCELLANEOUS'
  }

@Entity({
  name: 'nameProfession',
})
export class NameProfession {
  @Column('uuid')
  nameId: string;

  @Column({
    type: 'enum',
    enum: Profession,
  })
  profession: Profession;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Name, (name) => name.professions)
  name: Name;
}
