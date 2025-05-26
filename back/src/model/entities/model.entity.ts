import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Model {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name_model: string

    @Column()
    image_model: string

    @OneToMany(() => Car, car => car.models)
    carModel!: Car[];
}
