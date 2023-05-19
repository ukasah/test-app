const {Product, Components, Suppliers} = require('../models');

module.exports = {
    product: async () => {
        await Product.destroy({truncate: true, restartIdentity: true});
    },
    component: async () => {
        await Components.destroy({truncate: true, restartIdentity: true});
    },
    supplier: async () => {
        await Suppliers.destroy({truncate: true, restartIdentity: true});
    }
};