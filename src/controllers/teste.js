const knex = require('../services/connection');

const teste = async (req, res) => {
    return res.status(200).json({ mensagem: 'tudo certo' })
}

module.exports = teste;