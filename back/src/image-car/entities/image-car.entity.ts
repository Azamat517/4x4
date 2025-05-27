import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ImageCar {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string

    @Column({ nullable: true })
    carImageId?: number;

    @ManyToOne(() => Car, car => car.carImage)
    @JoinColumn({ name: 'carImageId' })
    imageCar!: Car;
}
