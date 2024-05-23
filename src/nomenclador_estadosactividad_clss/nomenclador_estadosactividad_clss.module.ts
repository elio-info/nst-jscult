import { Module } from '@nestjs/common';
import { NomencladorEstadosactividadClssService } from './nomenclador_estadosactividad_clss.service';
import { NomencladorEstadosactividadClssController } from './nomenclador_estadosactividad_clss.controller';

@Module({
  controllers: [NomencladorEstadosactividadClssController],
  providers: [NomencladorEstadosactividadClssService],
})
export class NomencladorEstadosactividadClssModule {}
