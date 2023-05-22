const { orderSchema, mongoose } = require('../schemas/equity.order.schema')

const equityOrders = new mongoose.model("EquityOrder", orderSchema)

const saveEquityOrder = async (orderDetails) => {
    //...
    return await equityOrders.create(orderDetails);
    //...
}

module.exports = {
    equityOrders: equityOrders,
    saveEquityOrder: saveEquityOrder
}