import { Test, TestingModule } from '@nestjs/testing';
import { NomenclaCategContrfatController } from './nomencla_categ-contrfat.controller';
import { NomenclaCategContrfatService } from './nomencla_categ-contrfat.service';

describe('NomenclaCategContrfatController', () => {
  let controller: NomenclaCategContrfatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NomenclaCategContrfatController],
      providers: [NomenclaCategContrfatService],
    }).compile();

    controller = module.get<NomenclaCategContrfatController>(NomenclaCategContrfatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
