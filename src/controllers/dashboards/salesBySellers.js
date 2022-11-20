const knex = require('../../services/connection');
const { displayError, runResponse } = require('../../../src/supplements');

const salesBySellers = async (req, res) => {
    try {
        const sales = await knex
            .select('vendas.nome_vendedor', 'vendas.vendedor_id')
            .sum('vendas.valor_venda as total_vendas')
            .from('vendas')
            .leftJoin('vendedores', 'vendas.vendedor_id', 'vendedores.id')
            .groupBy('vendedores.id', 'vendas.vendedor_id', 'vendas.nome_vendedor');

        if (!sales) {
            return runResponse(400, 'Não existem vendas cadastradas', res);
        }

        return res.status(200).json(sales);
    } catch (error) {
        displayError(error, res)
    }
}

module.exports = salesBySellers;