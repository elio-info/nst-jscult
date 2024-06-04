import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { Nomencla_Categorias_ContratacionManifestacion_Service } from './nomencla_categorias-contratacion-manifestacion.service';
import { Create_Nomencla_CategoriasContratacionManifestacion_Dto } from './dto/create-nomencla_categorias-contratacion-manifestacion.dto';
import { Update_Nomencla_CategoriasContratacionManifestacion_Dto } from './dto/update-nomencla_categorias-contratacion-manifestacion.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('nomencla-categorias-contratacion-manifestacion')
@ApiTags('nomencla-categorias-contratacion-manifestacion')
export class Nomencla_Categorias_ContratacionManifestacion_Controller {
  constructor(private readonly nomencla_Categorias_ContratacionManifestacionService: 
    Nomencla_Categorias_ContratacionManifestacion_Service) {}

  @Post()
  create(@Body(new ValidationPipe()) createNomencla_Categorias_ContratacionManifestacion_Dto: Create_Nomencla_CategoriasContratacionManifestacion_Dto) {
    return this.nomencla_Categorias_ContratacionManifestacionService.create(createNomencla_Categorias_ContratacionManifestacion_Dto);
  }

  @Get()
  findAll() {
    return this.nomencla_Categorias_ContratacionManifestacionService.findAll();
  }

  /* This code snippet is defining a GET endpoint in a NestJS controller. */
  @Get(':id')
  /**
   * The function findOne takes an id parameter and returns the first result found by calling the
   * findFirst method of the nomencla_Categorias_ContratacionManifestacionService.
   * @param {string} id - The `findOne` function takes a parameter `id` of type string. This function
   * is likely part of a service or controller in a Node.js application using a framework like NestJS.
   * The function is using the `id` parameter to call the `findFirst` method on the `nomencla_C
   * @returns The `First` `nomencla_Categorias_ContratacionManifestacionService`
   * being called with the `id` parameter passed to it, and the result of this method call
   * is being returned.
   */
  findOne(@Param('id') id: string) {
    return this.nomencla_Categorias_ContratacionManifestacionService.findFirst(id);
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
