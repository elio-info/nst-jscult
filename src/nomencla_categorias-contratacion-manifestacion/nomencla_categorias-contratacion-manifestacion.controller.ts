import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Nomencla_Categorias_ContratacionManifestacion_Service } from './nomencla_categorias-contratacion-manifestacion.service';
import { Create_Nomencla_CategoriasContratacionManifestacion_Dto } from './dto/create-nomencla_categorias-contratacion-manifestacion.dto';
import { Update_Nomencla_CategoriasContratacionManifestacion_Dto } from './dto/update-nomencla_categorias-contratacion-manifestacion.dto';

@Controller('nomencla-categorias-contratacion-manifestacion')
export class Nomencla_Categorias_ContratacionManifestacion_Controller {
  constructor(private readonly nomencla_Categorias_ContratacionManifestacionService: 
    Nomencla_Categorias_ContratacionManifestacion_Service) {}

  @Post()
  create(@Body() createNomencla_Categorias_ContratacionManifestacion_Dto: Create_Nomencla_CategoriasContratacionManifestacion_Dto) {
    return this.nomencla_Categorias_ContratacionManifestacionService.create(createNomencla_Categorias_ContratacionManifestacion_Dto);
  }

  @Get()
  findAll() {
    return this.nomencla_Categorias_ContratacionManifestacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nomencla_Categorias_ContratacionManifestacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNomencla_Categorias_ContratacionManifestacionDto: Update_Nomencla_CategoriasContratacionManifestacion_Dto) {
    return this.nomencla_Categorias_ContratacionManifestacionService.update(+id, updateNomencla_Categorias_ContratacionManifestacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomencla_Categorias_ContratacionManifestacionService.remove(+id);
  }
}
