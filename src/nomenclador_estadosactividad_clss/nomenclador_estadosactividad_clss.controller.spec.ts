import { Test, TestingModule } from '@nestjs/testing';
import { NomencladorEstadosactividadClssController } from './nomenclador_estadosactividad_clss.controller';
import { NomencladorEstadosactividadClssService } from './nomenclador_estadosactividad_clss.service';

describe('NomencladorEstadosactividadClssController', () => {
  let controller: NomencladorEstadosactividadClssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NomencladorEstadosactividadClssController],
      providers: [NomencladorEstadosactividadClssService],
    }).compile();

    controller = module.get<NomencladorEstadosactividadClssController>(NomencladorEstadosactividadClssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
