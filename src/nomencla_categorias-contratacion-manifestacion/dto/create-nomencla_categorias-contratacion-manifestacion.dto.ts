import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class Create_Nomencla_CategoriasContratacionManifestacion_Dto {
    @ApiProperty({
        example:'Nombre del Nomenclador. Ej: música, danza, audio, transporte, luces, etc.'
    })
    @IsNotEmpty({message:'El tipo de categoria no puede ser vacio.'})
    @IsString({message:'El nomenclador no puede ser numeral o caracter especial'})
    readonly nombre_categoria_manifestacion :string

    @ApiProperty({
        example:'Este campo es verdadero por defecto'
    })
    @IsOptional()
    @IsBoolean({
        message:'Solo Si o No'
    })
    apoyo_categoria_manifestacion:{
        type: boolean,
        value:true
    }

    
}
