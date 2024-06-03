import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Nomencla_Categorias_ContratacionManifestacion {
    @Prop({
        required:true
    })
    nombre_categoria_manifestacion :string

    @Prop({
        default:true
    })
    apoyo_categoria_manifestacion:boolean

    @Prop({ default: Date.now })
    createdAt: Date;
  
    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const Nomencla_Categorias_ContratacionManifestacion_Schema=
SchemaFactory.createForClass(Nomencla_Categorias_ContratacionManifestacion)

export type Nomencla_Categorias_ContratacionManifestacion_Document =
Nomencla_Categorias_ContratacionManifestacion & Document