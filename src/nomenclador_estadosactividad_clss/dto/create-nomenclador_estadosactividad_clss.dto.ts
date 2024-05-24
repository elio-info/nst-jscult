
import { ApiProperty } from "@nestjs/swagger"
import { IsString , IsNotEmpty, IsInt,  } from "class-validator"
export class CreateNomencladorEstadosactividadClssDto {
    @IsNotEmpty({message:'Id:Esto es obligatorio'})
    @ApiProperty(  {example:'P'} )
    @IsString({message:'Id:Esto es obligatorio'})
    id_NEA: string
    @ApiProperty({example:'Planificada'})
    @IsString({message:'Nombre:Esto es obligatorio'})
    @IsNotEmpty({message:'Id:Esto es obligatorio'})
    nombre_NEA: string    
}
