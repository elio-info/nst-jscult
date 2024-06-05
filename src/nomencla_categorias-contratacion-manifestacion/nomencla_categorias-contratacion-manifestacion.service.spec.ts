import { Test, TestingModule } from '@nestjs/testing';
import { Nomencla_Categorias_ContratacionManifestacion_Service } from './nomencla_categorias-contratacion-manifestacion.service';
import { Nomencla_Categorias_ContratacionManifestacion } from './schemas/nomencla_categorias-contratacion-manifestacion.schema';
import { Model } from 'mongoose';
import { create } from 'domain';
import { getModelToken } from '@nestjs/mongoose';
import { Create_Nomencla_CategoriasContratacionManifestacion_Dto } from './dto/create-nomencla_categorias-contratacion-manifestacion.dto';
import { Nomencla_Categorias_ContratacionManifestacion_Controller } from './nomencla_categorias-contratacion-manifestacion.controller';


describe('Nomencla_Categorias_ContratacionManifestacion_Service_Test', () => {
  let n_c_ContratManifestArts_service: Nomencla_Categorias_ContratacionManifestacion_Service;
  let n_c_ContratManifestArts_model:Model <Nomencla_Categorias_ContratacionManifestacion>

  const mock_n_c_ContratManifestArts_service={
    create: jest.fn()
    /*,finAll: jest.fn(),
    findId: jest.fn(),
    findFirstName: jest.fn(),
    update: jest.fn(),
    remove: jest.fn()*/
  }

  beforeEach(async () => {//
    const module: TestingModule = await Test.createTestingModule({
      // mio 
      // controllers:[Nomencla_Categorias_ContratacionManifestacion_Controller],
      imports: [ /* the Module containing "Nomencla_Categorias_ContratacionManifestacionModel" */ ]
      // fin mio
      providers: [
        Nomencla_Categorias_ContratacionManifestacion //original_Service 
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
        const nomen_clasif_contrMansArts ={
          nombre_categoria_manifestacion:'nueva clasif',
          apoyo_categoria_manifestacion: false,
          createdAt: new Date()
          //,updatedAt:new Date()
        }//cierro objeto

        jest //
          .spyOn(n_c_ContratManifestArts_model,'create')
          .mockImplementationOnce(() => Promise.resolve(mock_n_c_ContratManifestArts_service.create()))
          // fin Jest
        const result= await n_c_ContratManifestArts_service.create(nomen_clasif_contrMansArts as Create_Nomencla_CategoriasContratacionManifestacion_Dto,)

        expect (result).toEqual(mock_n_c_ContratManifestArts_service)

      })
    }
  )
  //#endregion create
  // end test
});
