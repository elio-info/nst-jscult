import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Nomencla_Categorias_ContratacionManifestacion {
    @Prop()
    nombre_categoria_manifestacion :string

    @Prop()
    apoyo_categoria_manifestacion:boolean
}

export const Nomencla_Categorias_ContratacionManifestacion_Schema=
SchemaFactory.createForClass(Nomencla_Categorias_ContratacionManifestacion)

export type Nomencla_Categorias_ContratacionManifestacion_Document =
Nomencla_Categorias_ContratacionManifestacion & Document