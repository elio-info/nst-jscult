import { Module } from '@nestjs/common';
import { NomencladorEstadosActividadController } from './nomenclador_estadosactividad_clss.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nomenclador_EstadosActividad, Nomenclador_EstadosActividad_Schema } from './schemas/nomenclador_estadosactividad_clss.schema';
import { NomencladorEstadosActividadService } from './nomenclador_estadosactividad_clss.service';

@Module({
  imports:[MongooseModule.forFeature([{name: Nomenclador_EstadosActividad.name, schema: Nomenclador_EstadosActividad_Schema}])],
  controllers: [NomencladorEstadosActividadController],
  providers: [NomencladorEstadosActividadService],
})
export class Nomenclador_EstadosActividad_Module {}
