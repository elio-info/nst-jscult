import { Test, TestingModule } from '@nestjs/testing';
import { Nomenclador_EstadosActividad_Service } from './nomenclador_estadosactividad_clss.service';

describe('Nomenclador_EstadosActividad_ClssService', () => {
  let service: Nomenclador_EstadosActividad_Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Nomenclador_EstadosActividad_Service],
    }).compile();

    service = module.get<Nomenclador_EstadosActividad_Service>(Nomenclador_EstadosActividad_Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
