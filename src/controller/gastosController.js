import GastoModel from '../model/gastoModel.js'

async function getGastos(req, res) {
    try{
        const gastos = await GastoModel.find({}).lean();
        gastos.forEach(element => {
            console.log(element.gasto)
        });
        res.render('gastos', {layout : 'gastosLayout', gastos}) 
    }
    catch(err){
        console.log(err)
    }
}

async function getGasto(req, res) {
    try{
        const gasto = await GastoModel.findById(req.id)
        res.send(gasto)
    }
    catch(err){
        console.log(err)
    }
}

async function storeGasto(req, res) {
    try {
        await GastoModel.create({
            gasto: req.gasto,
            tipo: req.tipo,
            importe: req.importe
        })
        res.send('Exito')
    } catch (err) {
        console.log(err)
    }
}


async function updateGasto(req, res){
    try {
        console.log('Update Gasto')
    } catch (err) {
        console.log(err)
    }
}

async function deleteGasto(req, res){
    try {
        console.log('Delete Gasto')
    } catch (err) {
        console.log(err)
    }
}

const gastosController = {
    getGastos,
    getGasto,
    storeGasto,
    updateGasto,
    deleteGasto
}

export default gastosController