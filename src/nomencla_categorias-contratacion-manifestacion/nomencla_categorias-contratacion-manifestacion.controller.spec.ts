import { Test, TestingModule } from '@nestjs/testing';
import { Nomencla_Categorias_ContratacionManifestacion_Controller } from './nomencla_categorias-contratacion-manifestacion.controller';
import { Nomencla_Categorias_ContratacionManifestacion_Service } from './nomencla_categorias-contratacion-manifestacion.service';

describe('Nomencla_Categorias_ContratacionManifestacionController', () => {
  let controller: Nomencla_Categorias_ContratacionManifestacion_Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Nomencla_Categorias_ContratacionManifestacion_Controller],
      providers: [Nomencla_Categorias_ContratacionManifestacion_Service],
    }).compile();

    controller = module.get<Nomencla_Categorias_ContratacionManifestacion_Controller>(Nomencla_Categorias_ContratacionManifestacion_Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
