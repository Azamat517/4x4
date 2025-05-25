import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Tuning {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name_tuning: string

    @Column()
    image_tunning: string

    @Column()
    description_tuning: string

}
