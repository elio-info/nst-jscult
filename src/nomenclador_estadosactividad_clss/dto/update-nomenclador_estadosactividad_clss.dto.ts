import { PartialType } from '@nestjs/swagger';
import { CreateNomencladorEstadosActividadDto } from './create-nomenclador_estadosactividad_clss.dto';

export class UpdateNomencladorEstadosActividadDto extends PartialType(CreateNomencladorEstadosActividadDto) {}
