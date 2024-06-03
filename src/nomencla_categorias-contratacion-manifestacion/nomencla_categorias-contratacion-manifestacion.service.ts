import { Injectable } from '@nestjs/common';
import { Create_Nomencla_CategoriasContratacionManifestacion_Dto } from './dto/create-nomencla_categorias-contratacion-manifestacion.dto';
import { Update_Nomencla_CategoriasContratacionManifestacion_Dto } from './dto/update-nomencla_categorias-contratacion-manifestacion.dto';
 
@Injectable()
export class Nomencla_Categorias_ContratacionManifestacion_Service {
  create(createNomenclaCategoriasContratacionManifestacionDto: Create_Nomencla_CategoriasContratacionManifestacion_Dto) {
    return 'This action adds a new nomenclaCategoriasContratacionManifestacion~';
  }

  findAll() {
    return `This action returns all nomenclaCategoriasContratacionManifestacion~`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nomenclaCategoriasContratacionManifestacion~`;
  }

  update(id: number, updateNomenclaCategoriasContratacionManifestacionDto: Update_Nomencla_CategoriasContratacionManifestacion_Dto) {
    return `This action updates a #${id} nomenclaCategoriasContratacionManifestacion~`;
  }

  remove(id: number) {
    return `This action removes a #${id} nomenclaCategoriasContratacionManifestacion~`;
  }
}
