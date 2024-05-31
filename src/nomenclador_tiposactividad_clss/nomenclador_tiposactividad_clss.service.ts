import { Injectable } from '@nestjs/common';
import { Create_Nomenclador_TiposActividad_Dto } from './dto/create-nomenclador_tiposactividad_clss.dto';
import { UpdateNomencladorTiposactividadClssDto } from './dto/update-nomenclador_tiposactividad_clss.dto';
import { Nomenclador_TiposActividad_Interface} from '../common/interfaces/nomenclador_tiposactividades.interface'
import { Nomenclador_TiposActividad_Model } from 'src/common/models/models';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';
import { throwIfEmpty } from 'rxjs';

@Injectable()
export class Nomenclador_TiposActividad_Service {
  
  constructor (@InjectModel ( Nomenclador_TiposActividad_Model.name ) private readonly model:Model<Nomenclador_TiposActividad_Interface>){}

  async create(createNomencladorTiposactividadClssDto: Create_Nomenclador_TiposActividad_Dto):
  Promise<Nomenclador_TiposActividad_Interface> {
    console.log(createNomencladorTiposactividadClssDto)
    
    return this.model.create(createNomencladorTiposactividadClssDto)
  }

  async find(req:Request) : Promise<Nomenclador_TiposActividad_Interface[]>{
    //`This action returns all nomencladorTiposactividadClss`;
    let preg=req.query,
        busco=preg.nta? {
        id_NTA: preg.nta ? {
          $regex: preg.nta,
          $options: 'i'
          } : '',
        nombre_NTA: preg.nmb ?{ 
          $regex: preg.nmb,
          $options:'i'
        } : '',
  }:{}
  console.log(busco)
    return await this.model.find(busco)
  }
/*
  findAll() {
    return `This action returns all nomencladorTiposactividadClss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nomencladorTiposactividadClss`;
  }
*/
 async update(id: string, updateNomencladorTiposactividadClssDto: UpdateNomencladorTiposactividadClssDto) {
    return await this.model.findOneAndUpdate(
      { id_NTA:id},updateNomencladorTiposactividadClssDto,{new:true,}
    );
  }

async  remove(id: string) {
    return await this.model.findOneAndDelete({id_NTA:id});
  }
  /*
  */
}
