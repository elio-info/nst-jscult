import { Injectable } from '@nestjs/common';
import { Create_Nomencla_CategoriasContratacionManifestacion_Dto } from './dto/create-nomencla_categorias-contratacion-manifestacion.dto';
import { Update_Nomencla_CategoriasContratacionManifestacion_Dto } from './dto/update-nomencla_categorias-contratacion-manifestacion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Nomencla_Categorias_ContratacionManifestacion, Nomencla_Categorias_ContratacionManifestacion_Document } from './schemas/nomencla_categorias-contratacion-manifestacion.schema';
import { Model } from 'mongoose';
 
@Injectable()
export class Nomencla_Categorias_ContratacionManifestacion_Service {
  
  constructor(
    @InjectModel( Nomencla_Categorias_ContratacionManifestacion.name) private readonly nomencla_categ_ContrataManif_Model: Model < Nomencla_Categorias_ContratacionManifestacion_Document>,
  ){}

  async create(createNomenclaCategoriasContratacionManifestacionDto: Create_Nomencla_CategoriasContratacionManifestacion_Dto) {
    let dep= await this.findFirst(createNomenclaCategoriasContratacionManifestacionDto.nombre_categoria_manifestacion)
    console.log(dep)
    if ( 
      dep!=null
    )
      return {
        message:'ya existe'
      };
     else     
    this.nomencla_categ_ContrataManif_Model.create(
      createNomenclaCategoriasContratacionManifestacionDto
      );
    
  }

  findAll() {
    return this.nomencla_categ_ContrataManif_Model.find();
  }

  findFirst(id_nom_cat_contman: string):Promise<Nomencla_Categorias_ContratacionManifestacion> {
    console.log(id_nom_cat_contman)
    let ll=this.nomencla_categ_ContrataManif_Model.findOne({
      nombre_categoria_manifestacion:id_nom_cat_contman
    })
    console.log(ll)
    return ll;
  }

  update(id: number, updateNomenclaCategoriasContratacionManifestacionDto: Update_Nomencla_CategoriasContratacionManifestacion_Dto) {
    return `This action updates a #${id} nomenclaCategoriasContratacionManifestacion~`;
  }

  remove(id: number) {
    return `This action removes a #${id} nomenclaCategoriasContratacionManifestacion~`;
  }
}
