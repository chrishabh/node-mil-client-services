const mongoose = require('mongoose');

const equityOrderFeeSchema = mongoose.Schema(
    {
        fee_type: {
            type: String
        },
        fee_percentage: {
            type: String
        },
        deleted_at: {
            type: Date
        },
        created_by: {
            type: String
        },
        created_at: {
            type: Date
        },
        updated_by: {
            type: String
        },
        updated_at: {
            type: Date
        }
    }
);

module.exports = { equityOrderFeeSchema , mongoose };