const knex = require('../../services/connection');
const { displayError, runResponse } = require('../../../src/supplements');

const avgSales = async (req, res) => {
    try {
        const sales = await knex.raw(`select avg(valor_venda),
        extract(month from data_venda) as month,
        extract(year from data_venda) as year
        from vendas
        group by extract(month from data_venda),
        extract(year from data_venda)
        order by month asc
        `);

        if (!sales) {
            return runResponse(400, 'Não existem vendas cadastradas', res);
        }

        const averageSales = sales.rows;

        return res.status(200).json(averageSales);
    } catch (error) {
        displayError(error, res)
    }
}

module.exports = avgSales;