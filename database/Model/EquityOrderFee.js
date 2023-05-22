const { equityOrderFeeSchema, mongoose } = require('../schemas/equity.order.fee.schema');

const equityOrderFee = new mongoose.model("EquityOrderFee", equityOrderFeeSchema);

const saveEquityOrderFee = async (feeDetails) => {
    //...
    return await equityOrderFee.insertMany(feeDetails);
    //...
}

const deleteEquityOrderFees = async () => {
    //...
    return await equityOrderFee.deleteMany();
    //...
}

const getEquityOrderFee = async () => {
    var equityFee = await equityOrderFee.find({})
    var equityFees = []
    for (var feetype of equityFee) {
        equityFees[feetype.fee_type] = feetype.fee_percentage
    }
    return equityFees
}

module.exports = {
    equityOrderFee: equityOrderFee,
    saveEquityOrderFee: saveEquityOrderFee,
    deleteEquityOrderFees: deleteEquityOrderFees,
    getEquityOrderFee: getEquityOrderFee
}