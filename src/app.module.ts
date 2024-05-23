import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NomencladorEtarioClssController } from './nomenclador_etario_clss/nomenclador_etario_clss.controller';
import { NomencladorEtarioClssService } from './nomenclador_etario_clss/nomenclador_etario_clss.service';
import { NomencladorEtarioClssModule } from './nomenclador_etario_clss/nomenclador_etario_clss.module';
import { NomencladorEstadosactividadClssModule } from './nomenclador_estadosactividad_clss/nomenclador_estadosactividad_clss.module';

@Module({
  imports: [NomencladorEtarioClssModule, NomencladorEstadosactividadClssModule],
  controllers: [AppController,NomencladorEtarioClssController],
  providers: [AppService, NomencladorEtarioClssService],
})
export class AppModule {}
