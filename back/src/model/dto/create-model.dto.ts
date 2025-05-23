import { IsNotEmpty, IsString } from "class-validator";


export class CreateModelDto {
    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString({ message: "Описание должно быть строкой" })
    name_model!: string;


}
