import { CarImage } from "src/car-image/entities/car-image.entity";
import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


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

    @ManyToOne(() => Car, model => model.carYear)
    @JoinColumn({ name: 'carYearId' })
    car!: Car;

    @OneToMany(() => CarImage, carImage => carImage.carImage)
    carModelImage!: CarImage[];

}
