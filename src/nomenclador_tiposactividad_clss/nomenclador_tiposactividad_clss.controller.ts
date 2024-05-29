import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Req } from '@nestjs/common';
import { Nomenclador_TiposActividad_Service } from './nomenclador_tiposactividad_clss.service';
import { Create_Nomenclador_TiposActividad_Dto } from './dto/create-nomenclador_tiposactividad_clss.dto';
import { UpdateNomencladorTiposactividadClssDto } from './dto/update-nomenclador_tiposactividad_clss.dto';
import { Request } from 'express';

@Controller('n-tiposactividad')
export class Nomenclador_TiposActividad_Controller {

  constructor(private readonly nomencladorTiposactividadClssService: Nomenclador_TiposActividad_Service) {}

  @Post()
  create(@Body(new ValidationPipe()) createNomencladorTiposactividadClssDto: Create_Nomenclador_TiposActividad_Dto) {
    return this.nomencladorTiposactividadClssService.create(createNomencladorTiposactividadClssDto);
  }

   @Get()
    find(@Req() req:Request) {
    return this.nomencladorTiposactividadClssService.find(req);
  }
/*
  @Get()
  findAll() {
    return this.nomencladorTiposactividadClssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nomencladorTiposactividadClssService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNomencladorTiposactividadClssDto: UpdateNomencladorTiposactividadClssDto) {
    return this.nomencladorTiposactividadClssService.update(+id, updateNomencladorTiposactividadClssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomencladorTiposactividadClssService.remove(+id);
  }
  */
}
