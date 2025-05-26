import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Tuning {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name_tuning: string

    @Column()
    image_tunning: string

    @Column({ length: 5000 })
    description_tuning: string

}
