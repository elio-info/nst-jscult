import { Test, TestingModule } from '@nestjs/testing';
import { NomencladorEstadosactividadClssService } from './nomenclador_estadosactividad_clss.service';

describe('NomencladorEstadosactividadClssService', () => {
  let service: NomencladorEstadosactividadClssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NomencladorEstadosactividadClssService],
    }).compile();

    service = module.get<NomencladorEstadosactividadClssService>(NomencladorEstadosactividadClssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
