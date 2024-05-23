import { Test, TestingModule } from '@nestjs/testing';
import { NomencladorEtarioClssService } from './nomenclador_etario_clss.service';

describe('NomencladorEtarioClssService', () => {
  let service: NomencladorEtarioClssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NomencladorEtarioClssService],
    }).compile();

    service = module.get<NomencladorEtarioClssService>(NomencladorEtarioClssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
