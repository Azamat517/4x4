import { Model } from "src/model/entities/model.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name_car: string

    @Column()
    image: string

    @Column({ nullable: true })
    carId?: number;

    @ManyToOne(() => Model, model => model.carModel)
    @JoinColumn({ name: 'carId' })
    models!: Model;

}



