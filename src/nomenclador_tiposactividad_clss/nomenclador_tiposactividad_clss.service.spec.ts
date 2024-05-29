import { Test, TestingModule } from '@nestjs/testing';
import { Nomenclador_TiposActividad_Service } from './nomenclador_tiposactividad_clss.service';

describe('NomencladorTiposactividadClssService', () => {
  let service: Nomenclador_TiposActividad_Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Nomenclador_TiposActividad_Service],
    }).compile();

    service = module.get<Nomenclador_TiposActividad_Service>(Nomenclador_TiposActividad_Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
