import { Module } from '@nestjs/common';
import { NomenclaCategContrfatService } from './nomencla_categ-contrfat.service';
import { NomenclaCategContrfatController } from './nomencla_categ-contrfat.controller';

@Module({
  controllers: [NomenclaCategContrfatController],
  providers: [NomenclaCategContrfatService],
})
export class NomenclaCategContrfatModule {}
