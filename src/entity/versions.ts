import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { services } from './services';

@Entity()
export class versions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  version: number;

  @CreateDateColumn()
  createdDate: Date;

  @Column({length: 100})
  pathUrl!: string;

  @ManyToOne(() => services, (service) => service.versions)
  service: services
}
