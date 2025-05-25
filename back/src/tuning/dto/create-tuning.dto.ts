import { IsNotEmpty, IsString } from "class-validator";

export class CreateTuningDto {

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString({ message: "Описание должно быть строкой" })
    name_tuning!: string;

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString({ message: "Описание должно быть строкой" })
    image_tunning!: string;

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString({ message: "Описание должно быть строкой" })
    description_tuning!: string;
}

