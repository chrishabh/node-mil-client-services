const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    account_number: {
        type: Number,
        required: true,
    },
    portfolio_number: {
        type: Number,
        required: true,
    },
    order_status: {
        type: String,
        enum: ['NEW', 'VERIFIED', 'CHECKED', 'APPROVED', 'SUBMITTED', 'PROCESSED'],
        default: 'NEW'
    },
    unique_id: {
        type: String
    },
    process_started: {
        type: String
    },
    unibanx_order_id: {
        type: String
    },
    action: {
        type: String,
        enum: ['buy', 'sell'],
        default: 'buy'
    },
    stock_symbol: {
        type: String
    },
    market_classification: {
        type: String
    },
    transaction_currency: {
        type: String
    },
    jmd_equivalent: {
        type: Number,
    },
    order_type: {
        type: String,
        enum: ['limit', 'market'],
        default: 'limit'
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
    },
    order_date: {
        type: Date
    },
    save_order_date: {
        type: Date
    },
    expire_type: {
        type: String
    },
    broker_fee: {
        type: String
    },
    jse_fee: {
        type: Number,
    },
    jcsd_fee: {
        type: Number,
    },
    gct_fee: {
        type: Number,
    },
    total_payable: {
        type: Number,
    },
    broker_fee_calculation: {
        type: Number,
    },
    jse_fee_calculation: {
        type: Number,
    },
    jcsd_fee_calculation: {
        type: Number,
    },
    gct_fee_calculation: {
        type: Number,
    },
    expire_date: {
        type: Date
    },
    expire_at: {
        type: Date
    },
    placed_by: {
        type: String,
        enum: ['customer', 'worker'],
        default: 'customer'
    },
    verified_by: {
        type: String
    },
    processed_percentage: {
        type: Number
    },
    verified_at: {
        type: Date
    },
    checked_by: {
        type: String
    },
    checked_at: {
        type: Date
    },
    approved_by: {
        type: String
    },
    approved_at: {
        type: Date
    },
    start_process_by: {
        type: String
    },
    start_process_at: {
        type: Date
    },
    processed_by: {
        type: String
    },
    processed_at: {
        type: Date
    },
    rejected_by: {
        type: String
    },
    rejected_at: {
        type: Date
    },
    cancelled_by: {
        type: String
    },
    cancelled_at: {
        type: Date
    },
    fee_updated_by: {
        type: String
    },
    fee_updated_at: {
        type: Date
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
    },
    agreement_first: {
        type: String,
        enum: ['0', '1'],
        default: '0'
    },
    agreement_second: {
        type: String,
        enum: ['0', '1'],
        default: '0'
    },
    expired_flag: {
        type: Number,
    },
    exported_by: {
        type: String
    },
    exported_at: {
        type: Date
    }

});

module.exports = { orderSchema , mongoose };