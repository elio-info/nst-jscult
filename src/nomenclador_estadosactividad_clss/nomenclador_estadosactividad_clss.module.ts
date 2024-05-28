import { Module } from '@nestjs/common';
import { NomencladorEstadosActividadController } from './nomenclador_estadosactividad_clss.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NomencladorEstadosActividadClss, NomencladorEstadosActividadSchema } from './schemas/nomenclador_estadosactividad_clss.schema';
import { NomencladorEstadosActividadService } from './nomenclador_estadosactividad_clss.service';

@Module({
  imports:[MongooseModule.forFeature([{name: NomencladorEstadosActividadClss.name, schema: NomencladorEstadosActividadSchema}])],
  controllers: [NomencladorEstadosActividadController],
  providers: [NomencladorEstadosActividadService],
})
export class NomencladorEstadosactividadClssModule {}
