import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  producers: string;

  @Column()
  year: number;

  @Column({ default: false })
  winner: boolean;

  @Column()
  studios: string;
}
