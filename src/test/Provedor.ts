import {model, Schema, connect} from 'mongoose'

enum TipoProvedor {ALMUERZO = "ALMUERZO"}

interface IProvedor {
    ruc: string,
    nombre: string,
    direccion: string,
    representante: string,
    tipo: TipoProvedor,
    clientesProvedor: string[]
}

const provedorSchema = new Schema<IProvedor>({
    ruc: {type: String, required: true},
    nombre: {type: String, required: true},
    representante: {type: String, required: true},
    tipo: {type: String, required: true, enum: Object.values(TipoProvedor)},
    clientesProvedor: {type: [String], required: true}
})

const Provedor = model<IProvedor>('Provedor', provedorSchema);


run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await connect('mongodb://127.0.0.1:27017/test', {
        authSource: "admin",
        user: "root",
        pass: "root"
    });

    const user = new Provedor({
        ruc: '1c2',
        nombre: 'pablo',
        representante: 'a',
        tipo: TipoProvedor.ALMUERZO,
        clientesProvedor: ['1']
    });
    await user.save()

    console.log(user.ruc); // 'bill@initech.com'
}
