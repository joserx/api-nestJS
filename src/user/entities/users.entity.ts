const { Column, PrimaryGeneratedColumn, Entity } = require('typeorm');
@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  tel: string;

  @Column()
  cep: string;
}
