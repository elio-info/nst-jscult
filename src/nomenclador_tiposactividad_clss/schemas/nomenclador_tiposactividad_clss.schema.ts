import mongoose from "mongoose";

export const Nomenclador_TiposActividad_Schema = new mongoose.Schema(
    {
        id_NTA:{ type: String, required:true},
        nombre_NTA:{ type: String, required:true}
    },
    { 
        timestamps: true 
    }
)
//creating indexes
Nomenclador_TiposActividad_Schema.index( { id_NTA:1 } , { unique : true })
