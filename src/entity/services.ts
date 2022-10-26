import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { versions } from './versions';

@Entity()
export class services extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false,length: 100})
  name: string;

  @Column()
  description!: string;

  @Column()
  version_count!: number;

  @OneToMany(() => versions, (version) => version.service)
  versions: versions[]
}
