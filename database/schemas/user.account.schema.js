const mongoose = require("mongoose");

const userAccountSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    account_number: {
        type: Number,
        required: true,
    },
    account_title: {
        type: String
    },
    account_manager: {
        type: String
    },
    account_manager_code: {
        type: String
    },
    account_type: {
        type: String
    },
    is_minor: {
        type: String,
        default: '0'
    },
    jcsd: {
        type: Number
    },
    market_classification: {
        type: Number
    },
    trn: {
        type: Number,
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    address: {
        type: String
    },
    is_primary: {
        type: Number,
    },
    account_source: {
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

});

module.exports = { userAccountSchema, mongoose };