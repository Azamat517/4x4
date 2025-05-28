import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class CarYear {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    car_year: string

    @Column()
    body_number: string

    @Column({ nullable: true })
    carYearId?: number;


    @ManyToOne(() => Car, model => model.сarYear)
    @JoinColumn({ name: 'carYearId' })
    car!: Car;

}
