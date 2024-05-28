import { Injectable } from '@nestjs/common';
import { CreateNomencladorEstadosActividadDto } from './dto/create-nomenclador_estadosactividad_clss.dto';
import { UpdateNomencladorEstadosActividadDto } from './dto/update-nomenclador_estadosactividad_clss.dto';
import { NomencladorEstadosActividadClss, NomencladorEstadoActividadDocument } from './schemas/nomenclador_estadosactividad_clss.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { timeStamp } from 'console';

@Injectable()
export class NomencladorEstadosActividadService {

  constructor(
    @InjectModel (NomencladorEstadosActividadClss.name )
    private nomencladorEstadosActividadModel: Model<NomencladorEstadoActividadDocument>,
  ){}

  async create(createNomencladorEstadosActividadDto: CreateNomencladorEstadosActividadDto):
    Promise<NomencladorEstadosActividadClss>
  {
    return this.nomencladorEstadosActividadModel.create(createNomencladorEstadosActividadDto);
  }

  async findAll(): Promise<NomencladorEstadosActividadClss[]> {
    return this.nomencladorEstadosActividadModel.find().exec();
  }

  async findOne(id: string) {
    return this.nomencladorEstadosActividadModel.findOne({ _id:id}).exec();
  }

  async update(id: string, updateNomencladorEstadosActividadDto: UpdateNomencladorEstadosActividadDto) {
    return this.nomencladorEstadosActividadModel.findOneAndUpdate(
      { _id:id},updateNomencladorEstadosActividadDto,{new: true,}
    )
  }

  async remove(id: string) {
    return this.nomencladorEstadosActividadModel.findByIdAndDelete({_id:id}).exec()
  }
}
