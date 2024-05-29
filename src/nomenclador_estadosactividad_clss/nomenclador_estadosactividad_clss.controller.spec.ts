import { Test, TestingModule } from '@nestjs/testing';
import { NomencladorEstadosActividadController } from './nomenclador_estadosactividad_clss.controller';
import { NomencladorEstadosActividadService } from './nomenclador_estadosactividad_clss.service';

describe('NomencladorEstadosactividadClssController', () => {
  let controller: NomencladorEstadosActividadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NomencladorEstadosActividadController],
      providers: [NomencladorEstadosActividadService],
    }).compile();

    controller = module.get<NomencladorEstadosActividadController>(NomencladorEstadosActividadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
