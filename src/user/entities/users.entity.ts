const { Column, PrimaryGeneratedColumn, Entity } = require('typeorm');
@Entity('users')
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
