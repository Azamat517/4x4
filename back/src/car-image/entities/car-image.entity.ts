import { CarYear } from "src/car-year/entities/car-year.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class CarImage {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string



    @Column({ nullable: true })
    carImageId?: number;

    @ManyToOne(() => CarYear, model => model.carModelImage)
    @JoinColumn({ name: 'carImageId' })
    carImage!: CarYear;
}
