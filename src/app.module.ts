import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NomencladorEtarioClssController } from './nomenclador_etario_clss/nomenclador_etario_clss.controller';
import { NomencladorEtarioClssService } from './nomenclador_etario_clss/nomenclador_etario_clss.service';
import { NomencladorEtarioClssModule } from './nomenclador_etario_clss/nomenclador_etario_clss.module';
import { NomencladorEstadosactividadClssModule } from './nomenclador_estadosactividad_clss/nomenclador_estadosactividad_clss.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NomencladorEtarioClssModule, NomencladorEstadosactividadClssModule,
    //importando Mongoose
    MongooseModule.forRoot('mongodb://localhost:27017/nomenclador_estadosactividad')
  ],
  controllers: [AppController,NomencladorEtarioClssController],
  providers: [AppService, NomencladorEtarioClssService],
})
export class AppModule {}
