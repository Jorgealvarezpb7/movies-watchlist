import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

export enum AudienceRating {
  G = 'GENERAL_AUDIENCE',
  PG = 'PARENTAL_GUIDANCE',
  PG13 = 'PARENTS_STRONGLY_CAUTIONED',
  R = 'RESTRICTED',
  NC17 = 'ADULTS_ONLY'
}

/**
 * A Movie or TV Show Series Title
 */
@Entity({
  name: 'titles'
})
export class Title {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  starRating: number;

  @Column({
    type: 'enum',
    enum: AudienceRating,
    default: AudienceRating.R
  })
  audienceRating: AudienceRating;

  @Column()
  title: string;

  @Column('date')
  releaseDate: Date;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}