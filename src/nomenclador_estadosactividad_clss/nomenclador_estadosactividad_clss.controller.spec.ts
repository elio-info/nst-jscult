import { Test, TestingModule } from '@nestjs/testing';
import { NomencladorEstadosActividadController } from './nomenclador_estadosactividad_clss.controller';
import { Nomenclador_EstadosActividad_Service } from './nomenclador_estadosactividad_clss.service';

describe('NomencladorEstadosactividadClssController', () => {
  let controller: NomencladorEstadosActividadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NomencladorEstadosActividadController],
      providers: [Nomenclador_EstadosActividad_Service],
    }).compile();

    controller = module.get<NomencladorEstadosActividadController>(NomencladorEstadosActividadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
