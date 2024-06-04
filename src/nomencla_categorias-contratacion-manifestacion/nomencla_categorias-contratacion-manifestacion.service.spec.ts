import { Test, TestingModule } from '@nestjs/testing';
import { Nomencla_Categorias_ContratacionManifestacion_Service } from './nomencla_categorias-contratacion-manifestacion.service';
import { Nomencla_Categorias_ContratacionManifestacion } from './schemas/nomencla_categorias-contratacion-manifestacion.schema';
import { Model } from 'mongoose';
import { create } from 'domain';
import { getModelToken } from '@nestjs/mongoose';


describe('Nomencla_Categorias_ContratacionManifestacion_Service_Test', () => {
  let n_c_ContratManifestArts_service: Nomencla_Categorias_ContratacionManifestacion_Service;
  let n_c_ContratManifestArts_model:Model <Nomencla_Categorias_ContratacionManifestacion>

  const mock_n_c_ContratManifestArts_service={
    create: jest.fn(),
    finnAll: jest.fn(),
    findId: jest.fn(),
    findFirstName: jest.fn(),
    update: jest.fn(),
    remove: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Nomencla_Categorias_ContratacionManifestacion_Service //original
        , {
          provide:getModelToken(Nomencla_Categorias_ContratacionManifestacion.name),
          useValue: mock_n_c_ContratManifestArts_service,
        }
      ],
    }).compile();

    n_c_ContratManifestArts_service = module.get<Nomencla_Categorias_ContratacionManifestacion_Service>(Nomencla_Categorias_ContratacionManifestacion_Service);
    n_c_ContratManifestArts_model= module.get<Model<Nomencla_Categorias_ContratacionManifestacion>>(getModelToken(Nomencla_Categorias_ContratacionManifestacion.name))
  });


  it('should be defined', () => {
    expect(n_c_ContratManifestArts_service).toBeDefined();
  });

  //begin de test
  //#region create
  describe(
    'create',() =>{ //nombre del test a probar
      it('crea y evuelve nomen clasif contMansArts', async()=> { 
        //comence a probar
        //creando nomen clasif contMansArts

      })
    }
  )
  //#endregion create
  // end test
});
