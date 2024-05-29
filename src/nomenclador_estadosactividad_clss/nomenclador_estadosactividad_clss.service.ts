import { Injectable } from '@nestjs/common';
import { CreateNomencladorEstadosActividadDto } from './dto/create-nomenclador_estadosactividad_clss.dto';
import { UpdateNomencladorEstadosActividadDto } from './dto/update-nomenclador_estadosactividad_clss.dto';
import { Nomenclador_EstadosActividad, Nomenclador_EstadoActividad_Document } from './schemas/nomenclador_estadosactividad_clss.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { timeStamp } from 'console';
import { KeyObject } from 'crypto';

@Injectable()
export class NomencladorEstadosActividadService {

  constructor(
    @InjectModel (Nomenclador_EstadosActividad.name )
    private nomencladorEstadosActividadModel: Model<Nomenclador_EstadoActividad_Document>,
  ){}

  async create(createNomencladorEstadosActividadDto: CreateNomencladorEstadosActividadDto):
    Promise<Nomenclador_EstadosActividad> 
  {
    console.log ("se sabe "+  createNomencladorEstadosActividadDto.id_NEA)
    console.log ("se sabe con trim"+  createNomencladorEstadosActividadDto.id_NEA.trim().length)
    if (createNomencladorEstadosActividadDto.id_NEA==="" || createNomencladorEstadosActividadDto.id_NEA.trim().length==0  ) {
      return null
    }

    if ((await this.findOne(createNomencladorEstadosActividadDto.id_NEA)) != null) return null;
    
    return this.nomencladorEstadosActividadModel.create(createNomencladorEstadosActividadDto);
  }
  async create_val(createNomencladorEstadosActividadDto: CreateNomencladorEstadosActividadDto)  
  {
    // console.log ("se sabe "+  createNomencladorEstadosActividadDto.id_NEA)
    // console.log ("se sabe con trim"+  createNomencladorEstadosActividadDto.id_NEA.trim().length)
    // if (createNomencladorEstadosActividadDto.id_NEA==="" || createNomencladorEstadosActividadDto.id_NEA.trim().length==0  ) {
    //   return { message: "Cadena vacia no permitida"}
    // }

    let docmnt=(await this.find_Document(createNomencladorEstadosActividadDto))
    console.log(docmnt)
    if (docmnt != null) return { message: "Ya existe el documento"};
    
    return this.nomencladorEstadosActividadModel.create(createNomencladorEstadosActividadDto);
  }
  async find(request: Request): Promise<Nomenclador_EstadosActividad[]> {
    console.log(request.query)
    console.log(request.query)
    let viene=request.query
    let busco
    if (viene.nea) busco={id_NEA:viene.nea }
    if (viene.nmb) busco={nombre_NEA : viene.nmb}
    return this.nomencladorEstadosActividadModel
          .find(busco)
          .setOptions({sanitizeFilter: true})
          .exec();
  }

  async findAll(request: Request): Promise<Nomenclador_EstadosActividad[]> {
    return this.nomencladorEstadosActividadModel
          .find(request.query)
          .setOptions({sanitizeFilter: true})
          .exec();
  }

  async find_Document(estadosactividad: CreateNomencladorEstadosActividadDto) {    
    return this.nomencladorEstadosActividadModel.find(estadosactividad).exec();
  } 

  async findOne(id: string) {
    return this.nomencladorEstadosActividadModel.findOne({ id_NEA:id}).exec();
  }
  async update(id: string, updateNomencladorEstadosActividadDto: UpdateNomencladorEstadosActividadDto) {
    
    return this.nomencladorEstadosActividadModel.findOneAndUpdate(
      
      { id_NEA:id},updateNomencladorEstadosActividadDto,{new: true,}
    )
  }

  async remove(id: string) {
    return this.nomencladorEstadosActividadModel.findOneAndDelete({id_NEA :id}).exec()
  }
}
