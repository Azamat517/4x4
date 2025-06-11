import { IsNotEmpty, IsString } from "class-validator";

export class CreateCarYearDto {

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString({ message: "Описание должно быть строкой" })
    car_year!: string;


    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString({ message: "Описание должно быть строкой" })
    body_number!: string;


    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString({ message: "Описание должно быть строкой" })
    description!: string;
}
