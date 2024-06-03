import { Test, TestingModule } from '@nestjs/testing';
import { NomenclaCategContrfatService } from './nomencla_categ-contrfat.service';

describe('NomenclaCategContrfatService', () => {
  let service: NomenclaCategContrfatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NomenclaCategContrfatService],
    }).compile();

    service = module.get<NomenclaCategContrfatService>(NomenclaCategContrfatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
