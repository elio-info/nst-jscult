import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NomencladorEstadosactividadClssService } from './nomenclador_estadosactividad_clss.service';
import { CreateNomencladorEstadosactividadClssDto } from './dto/create-nomenclador_estadosactividad_clss.dto';
import { UpdateNomencladorEstadosactividadClssDto } from './dto/update-nomenclador_estadosactividad_clss.dto';

@Controller('nomenclador-estadosactividad-clss')
export class NomencladorEstadosactividadClssController {
  constructor(private readonly nomencladorEstadosactividadClssService: NomencladorEstadosactividadClssService) {}

  @Post()
  create(@Body() createNomencladorEstadosactividadClssDto: CreateNomencladorEstadosactividadClssDto) {
    return this.nomencladorEstadosactividadClssService.create(createNomencladorEstadosactividadClssDto);
  }

  @Get()
  findAll() {
    return this.nomencladorEstadosactividadClssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nomencladorEstadosactividadClssService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNomencladorEstadosactividadClssDto: UpdateNomencladorEstadosactividadClssDto) {
    return this.nomencladorEstadosactividadClssService.update(+id, updateNomencladorEstadosactividadClssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomencladorEstadosactividadClssService.remove(+id);
  }
}
