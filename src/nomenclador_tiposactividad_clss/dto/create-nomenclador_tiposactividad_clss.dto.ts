import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class Create_Nomenclador_TiposActividad_Dto {
    
    @IsNotEmpty({message:' Id: Debe de ser una cadena vacia'})
    @IsString({message:' Id: Debe de ser una cadena'})
    @ApiProperty({example:'DFR'})
    readonly id_NTA:string

   @IsNotEmpty({message:'Nombre: Debe de ser una cadena vacia'})
   @IsString({message:'Nombre: Debe de ser una cadena'})
   @ApiProperty({example:'DFR significa: Defecto Fomentado Acornico '})
   readonly nombre_NTA:string
}
