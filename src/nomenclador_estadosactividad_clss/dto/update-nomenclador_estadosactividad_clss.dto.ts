import { PartialType } from '@nestjs/swagger';
import { CreateNomencladorEstadosactividadClssDto } from './create-nomenclador_estadosactividad_clss.dto';

export class UpdateNomencladorEstadosactividadClssDto extends PartialType(CreateNomencladorEstadosactividadClssDto) {}
