import { Module } from '@nestjs/common';
import { Nomencla_Categorias_ContratacionManifestacion_Controller } from './nomencla_categorias-contratacion-manifestacion.controller';
import { Nomencla_Categorias_ContratacionManifestacion_Service } from './nomencla_categorias-contratacion-manifestacion.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Nomencla_Categorias_ContratacionManifestacion, Nomencla_Categorias_ContratacionManifestacion_Schema } from './schemas/nomencla_categorias-contratacion-manifestacion.schema';

@Module({
  imports:[
    MongooseModule.forFeature(
      [
        {
          name:Nomencla_Categorias_ContratacionManifestacion.name,
          schema:Nomencla_Categorias_ContratacionManifestacion_Schema
        }
      ]
    )
  ],
  controllers: [Nomencla_Categorias_ContratacionManifestacion_Controller],
  providers: [Nomencla_Categorias_ContratacionManifestacion_Service],
})
export class Nomencla_Categorias_ContratacionManifestacion_Module {}
