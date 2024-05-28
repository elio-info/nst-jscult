import { Req, Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { NomencladorEstadosActividadService } from './nomenclador_estadosactividad_clss.service';
import { CreateNomencladorEstadosActividadDto } from './dto/create-nomenclador_estadosactividad_clss.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateNomencladorEstadosActividadDto } from './dto/update-nomenclador_estadosactividad_clss.dto';

@Controller('nomenclador-estadosactividad-clss')
@ApiTags('nomenclador-estadosactividad-clss')
export class NomencladorEstadosActividadController {
  constructor(private readonly nomencladorEstadosActividadService: NomencladorEstadosActividadService) {}

  @Post()
  create(@Body() createNomencladorEstadosActividadDto: CreateNomencladorEstadosActividadDto) {   
      return this.nomencladorEstadosActividadService.create(createNomencladorEstadosActividadDto)   
  }

  @Get()
  findAll() {
    return this.nomencladorEstadosActividadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nomencladorEstadosActividadService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNomencladorEstadosactividadClssDto: UpdateNomencladorEstadosActividadDto) {
    return this.nomencladorEstadosActividadService.update(id, updateNomencladorEstadosactividadClssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomencladorEstadosActividadService.remove(id);
  }
}
