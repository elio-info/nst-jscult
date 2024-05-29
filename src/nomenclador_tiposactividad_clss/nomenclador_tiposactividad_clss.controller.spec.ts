import { Test, TestingModule } from '@nestjs/testing';
import { Nomenclador_TiposActividad_Controller } from './nomenclador_tiposactividad_clss.controller';
import { Nomenclador_TiposActividad_Service } from './nomenclador_tiposactividad_clss.service';

describe('NomencladorTiposactividadClssController', () => {
  let controller: Nomenclador_TiposActividad_Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Nomenclador_TiposActividad_Controller],
      providers: [Nomenclador_TiposActividad_Service],
    }).compile();

    controller = module.get<Nomenclador_TiposActividad_Controller>(Nomenclador_TiposActividad_Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
