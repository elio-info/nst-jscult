import { Module } from '@nestjs/common';
import { Nomenclador_TiposActividad_Service } from './nomenclador_tiposactividad_clss.service';
import { Nomenclador_TiposActividad_Controller } from './nomenclador_tiposactividad_clss.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nomenclador_TiposActividad_Model } from 'src/common/models/models';
import { Nomenclador_TiposActividad_Schema } from './schemas/nomenclador_tiposactividad_clss.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: Nomenclador_TiposActividad_Model.name,
      useFactory:()=> {
          return Nomenclador_TiposActividad_Schema
      },
    },
  ]),
  ],
  controllers: [Nomenclador_TiposActividad_Controller],
  providers: [Nomenclador_TiposActividad_Service],
})
export class Nomenclador_TiposActividad_Module {}
