import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

//export type N_EstadoActividad = NomencladorEstadosactividadClss

@Schema()
export class NomencladorEstadosactividad {
    @Prop()
    id_NEA: string
    @Prop()
    nombre_NEA: string
}

export const NomencladorEstadosactividadSchema = SchemaFactory.createForClass(NomencladorEstadosactividad)


