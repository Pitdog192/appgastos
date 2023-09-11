import mongoose from "mongoose"

const Schema = mongoose.Schema
const GastoSchema = new Schema({
    gasto: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    importe:{
        type: Number,
        required:true
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    muestra: {
        type: Boolean,
        default: true
    }
})

GastoSchema.method.success = function guardado(){
    console.log('Guardado con éxito')
}

GastoSchema.method.findGasto = function findGasto(gastoSearch){
    return this.find({gasto : gastoSearch})
}

const GastoModel = mongoose.model('gasto', GastoSchema)

export default GastoModel