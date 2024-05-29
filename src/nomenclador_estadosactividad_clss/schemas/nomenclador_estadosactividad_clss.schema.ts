import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type Nomenclador_EstadoActividad_Document = Nomenclador_EstadosActividad & Document;

@Schema()
export class Nomenclador_EstadosActividad {
    @Prop( { require : true })
    id_NEA:string
    @Prop()
    nombre_NEA: string
}

export const Nomenclador_EstadosActividad_Schema = SchemaFactory.createForClass(Nomenclador_EstadosActividad)


