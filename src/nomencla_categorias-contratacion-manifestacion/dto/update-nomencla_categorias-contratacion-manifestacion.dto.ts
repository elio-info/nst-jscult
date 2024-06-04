import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Create_Nomencla_CategoriasContratacionManifestacion_Dto } from './create-nomencla_categorias-contratacion-manifestacion.dto';
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsDate } from 'class-validator';

export class Update_Nomencla_CategoriasContratacionManifestacion_Dto extends PartialType(Create_Nomencla_CategoriasContratacionManifestacion_Dto) {
    @ApiProperty({
        example:'665f7c4808023e4c264a4f9b',
        description:`Esta el la llave del Objeto que se trabajara en cuestion`
    })
    @IsString()
    _id:string
    
    @ApiProperty({
        example:'Danza', 
        description:'Nombre del Nomenclador. Ej: música, danza, audio, transporte, luces, etc.'        
    })
    @IsOptional()
    @IsNotEmpty({message:'El tipo de categoria no puede ser vacio.'})
    @IsString({message:'El nomenclador no puede ser numeral o caracter especial'})
    readonly nombre_categoria_manifestacion :string

    @ApiProperty({
        example: true,
        description: `Que sea de apoyo es que no sea de cultura propiamente: 
                          <br>  Si: luces, transporte 
                          <br>  No: danza, teatro                         
                        <br>  Este campo es Falso por defecto.                                          
                        `
    })
    @IsOptional()
    @IsBoolean({
        message:'Solo Si o No'
    })
    apoyo_categoria_manifestacion:{
        type: boolean,
        value:false
    } 
    
    @IsOptional()
    @IsDate()
    updatedAt: Date
}
