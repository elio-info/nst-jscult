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
    let busco
    if(req.query.nta) busco={id_NTA: req.query.nta}
    return await this.model.find(busco)
  }
/*
  findAll() {
    return `This action returns all nomencladorTiposactividadClss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nomencladorTiposactividadClss`;
  }

  update(id: number, updateNomencladorTiposactividadClssDto: UpdateNomencladorTiposactividadClssDto) {
    return `This action updates a #${id} nomencladorTiposactividadClss`;
  }

  remove(id: number) {
    return `This action removes a #${id} nomencladorTiposactividadClss`;
  }
  */
}
