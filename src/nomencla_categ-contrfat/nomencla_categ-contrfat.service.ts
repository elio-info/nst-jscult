import { Injectable } from '@nestjs/common';
import { CreateNomenclaCategContrfatDto } from './dto/create-nomencla_categ-contrfat.dto';
import { UpdateNomenclaCategContrfatDto } from './dto/update-nomencla_categ-contrfat.dto';

@Injectable()
export class NomenclaCategContrfatService {
  create(createNomenclaCategContrfatDto: CreateNomenclaCategContrfatDto) {
    return 'This action adds a new nomenclaCategContrfat';
  }

  findAll() {
    return `This action returns all nomenclaCategContrfat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nomenclaCategContrfat`;
  }

  update(id: number, updateNomenclaCategContrfatDto: UpdateNomenclaCategContrfatDto) {
    return `This action updates a #${id} nomenclaCategContrfat`;
  }

  remove(id: number) {
    return `This action removes a #${id} nomenclaCategContrfat`;
  }
}
