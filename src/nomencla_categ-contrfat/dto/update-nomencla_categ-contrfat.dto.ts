import { PartialType } from '@nestjs/swagger';
import { CreateNomenclaCategContrfatDto } from './create-nomencla_categ-contrfat.dto';

export class UpdateNomenclaCategContrfatDto extends PartialType(CreateNomenclaCategContrfatDto) {}
