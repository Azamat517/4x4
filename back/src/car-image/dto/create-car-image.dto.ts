import { IsNotEmpty, IsString } from "class-validator";

export class CreateCarImageDto {

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString({ message: "Описание должно быть строкой" })
    image!: string;
}
