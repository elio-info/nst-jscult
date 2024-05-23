import { Injectable } from '@nestjs/common';
import { CreateNomencladorEstadosactividadClssDto } from './dto/create-nomenclador_estadosactividad_clss.dto';
import { UpdateNomencladorEstadosactividadClssDto } from './dto/update-nomenclador_estadosactividad_clss.dto';

@Injectable()
export class NomencladorEstadosactividadClssService {
  create(createNomencladorEstadosactividadClssDto: CreateNomencladorEstadosactividadClssDto) {
    return 'This action adds a new nomencladorEstadosactividadClss';
  }

  findAll() {
    return `This action returns all nomencladorEstadosactividadClss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nomencladorEstadosactividadClss`;
  }

  update(id: number, updateNomencladorEstadosactividadClssDto: UpdateNomencladorEstadosactividadClssDto) {
    return `This action updates a #${id} nomencladorEstadosactividadClss`;
  }

  remove(id: number) {
    return `This action removes a #${id} nomencladorEstadosactividadClss`;
  }
}
