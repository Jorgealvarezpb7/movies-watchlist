import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';

  @Entity({
    name: 'names'
  })
  export class Name {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('string')
    name: string;
  
    @Column('date')
    birthDate: Date;
  
    @Column('date', { nullable: true })
    deathDate?: Date;
  }
  