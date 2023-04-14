"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var TipoProvedor;
(function (TipoProvedor) {
    TipoProvedor["ALMUERZO"] = "ALMUERZO";
})(TipoProvedor || (TipoProvedor = {}));
const provedorSchema = new mongoose_1.Schema({
    ruc: { type: String, required: true },
    nombre: { type: String, required: true },
    representante: { type: String, required: true },
    tipo: { type: String, required: true, enum: Object.values(TipoProvedor) },
    clientesProvedor: { type: [String], required: true }
});
const Provedor = (0, mongoose_1.model)('Provedor', provedorSchema);
run().catch(err => console.log(err));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        // 4. Connect to MongoDB
        yield (0, mongoose_1.connect)('mongodb://127.0.0.1:27017/test', {
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
        yield user.save();
        console.log(user.ruc); // 'bill@initech.com'
    });
}
