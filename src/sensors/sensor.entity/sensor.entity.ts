import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sensors')
export class SensorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
