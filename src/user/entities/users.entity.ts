import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sobrenome: string;

  @Column()
  email: string;

  @Column()
  Tel: string;

  @Column()
  Cep: string;
}
