

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

/**
 * Produto:
 * 
 * -> Id: int
 * -> Nome: String
 * -> Preco: Number
 * -> Descricao: String
 * 
 */

var ProdutoSchema = new Schema({        
    descricao: String,
    referencia: String,
    preco: Number,
    estoque: Number
    
}, {
    timestamps: true,
});
module.exports = mongoose.model('Produto', ProdutoSchema);