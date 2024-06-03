import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NomenclaCategContrfatService } from './nomencla_categ-contrfat.service';
import { CreateNomenclaCategContrfatDto } from './dto/create-nomencla_categ-contrfat.dto';
import { UpdateNomenclaCategContrfatDto } from './dto/update-nomencla_categ-contrfat.dto';

@Controller('nomencla-categ-contrfat')
export class NomenclaCategContrfatController {
  constructor(private readonly nomenclaCategContrfatService: NomenclaCategContrfatService) {}

  @Post()
  create(@Body() createNomenclaCategContrfatDto: CreateNomenclaCategContrfatDto) {
    return this.nomenclaCategContrfatService.create(createNomenclaCategContrfatDto);
  }

  @Get()
  findAll() {
    return this.nomenclaCategContrfatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nomenclaCategContrfatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNomenclaCategContrfatDto: UpdateNomenclaCategContrfatDto) {
    return this.nomenclaCategContrfatService.update(+id, updateNomenclaCategContrfatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomenclaCategContrfatService.remove(+id);
  }
}
