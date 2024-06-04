import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NomenclaCategContrfatModule } from './nomencla_categ-contrfat/nomencla_categ-contrfat.module';
import { Nomencla_Categorias_ContratacionManifestacion_Module } from './nomencla_categorias-contratacion-manifestacion/nomencla_categorias-contratacion-manifestacion.module';
import { Nomencladores_Generales } from './common/enums/codificadores_nomencladores.controller';

@Module({
  imports: [
    //importando Mongoose
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/cultura'),//fin de Mongoose
    NomenclaCategContrfatModule,
    Nomencla_Categorias_ContratacionManifestacion_Module ,
    
    //NomencladorEtarioClssModule, 
    //Nomenclador_EstadosActividad_Module
    //,Nomenclador_TiposActividad_Module      
  ],
  controllers: [
    AppController,
    Nomencladores_Generales
  ],
  providers: [
    AppService, 
    //NomencladorEtarioClssService
    //,Nomenclador_TiposActividad_Service
  ],
})
export class AppModule {}
