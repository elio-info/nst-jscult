import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NomencladorEstadoActividadDocument = NomencladorEstadosActividadClss & Document;

@Schema()
export class NomencladorEstadosActividadClss {
    @Prop()
    id_NEA: string
    @Prop()
    nombre_NEA: string
}

export const NomencladorEstadosActividadSchema = SchemaFactory.createForClass(NomencladorEstadosActividadClss)


