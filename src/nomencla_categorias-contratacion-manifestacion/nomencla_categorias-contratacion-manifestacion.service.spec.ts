import { Test, TestingModule } from '@nestjs/testing';
import { Nomencla_Categorias_ContratacionManifestacion_Service } from './nomencla_categorias-contratacion-manifestacion.service';


describe('NomenclaCategoriasContratacionManifestacionService', () => {
  let service: Nomencla_Categorias_ContratacionManifestacion_Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Nomencla_Categorias_ContratacionManifestacion_Service],
    }).compile();

    service = module.get<Nomencla_Categorias_ContratacionManifestacion_Service>(Nomencla_Categorias_ContratacionManifestacion_Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
