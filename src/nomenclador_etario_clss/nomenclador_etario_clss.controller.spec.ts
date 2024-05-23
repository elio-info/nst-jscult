import { Test, TestingModule } from '@nestjs/testing';
import { NomencladorEtarioClssController } from './nomenclador_etario_clss.controller';

describe('NomencladorEtarioClssController', () => {
  let controller: NomencladorEtarioClssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NomencladorEtarioClssController],
    }).compile();

    controller = module.get<NomencladorEtarioClssController>(NomencladorEtarioClssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
