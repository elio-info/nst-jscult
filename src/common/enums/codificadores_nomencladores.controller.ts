import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Nomenclador_Clasifica_ContratoTalento, Nomenclador_EstadosDeActividadCultural, Nomenclador_GrupoEtareo, Nomenclador_TiposDeActividadCultural } from "./codificadores";
import { Nomenclador_EstadosActividad } from "src/nomenclador_estadosactividad_clss/schemas/nomenclador_estadosactividad_clss.schema";

@Controller('nomenclador')
@ApiTags('Nomencladores')

export class Nomencladores_Generales{   

    @Get('tipo-actvcultural')
    tipoActividadCultural() {
        return Nomenclador_TiposDeActividadCultural
    }

    @Get('tipo-grupoetareo')
    tipoGrupoEtareo() {
        return Nomenclador_GrupoEtareo
    } 
    
    @Get('tipo-contratotalento')
    tipoClasificionContratoTalento() {
        return Nomenclador_Clasifica_ContratoTalento
    }

    @Get('tipo-estadoactvcultural')
    tipoEstadoActividadCultural() {
        return Nomenclador_EstadosDeActividadCultural
    }
}