var UserAccount = require('../database/Model/UserAccount')
var EquityOrders = require('../database/Model/EquityOrder')
var EquityOrderFee = require('../database/Model/EquityOrderFee')
var dateTime = require('node-datetime');

//initiate equity orders
exports.initiateEquityOrder = async function initiateEquityOrder(req, res) {

    // const trn = await UserAccount.getTrnByuserId('1');
    let request = req.body.request
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d');

    marketOpenDate = formatted;

    request['account_type'] = request['account_type'] == 'margin' ? 30 : 1;

    if (request['action'] == 'sell') {
        request['account_type'] = 1;
    }

    let order_demographics = await UserAccount.getUserDemographicsByAccountNumber(request['account_number']);

    if (!order_demographics) {
        throw new Error('Account Details Not Found.')
    }

    if (request['order_type'] === 'market') {
        request['price'] = request['price'];//need to get from market price ticker data table
    }

    /**If the ExpireType is GTM then order will expire at theend of the month */
    var orderExpireDate = formatted;
    if (request['expiry_type'] == 'gtm') {
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var lastDay = new Date(y, m + 1, 0);
        orderExpireDate = lastDay;
    } else {
        orderExpireDate = marketOpenDate;
    }

    let EquityOrderFees = await EquityOrderFee.getEquityOrderFee();
    getAllEquityFee();
    let orderDetails = {
        user_id: 1,
        account_number: request['account_number'],
        portfolio_number: request['account_type'],
        unique_id: 99,
        stock_symbol: request['stock_symbol'],
        market_classification: request['market_classification'],
        transaction_currency: request['market_classification'] == 'USD_MAIN' ? 'USD' : 'JMD',
        jmd_equivalent: 1,
        action: request['action'],
        order_type: request['order_type'],
        price: request['price'],
        quantity: request['quantity'],
        amount: request['price'] * request['quantity'],
        expiry_type: request['expiry_type'],
        order_status: 'NEW',
        placed_by: 'customer',
        broker_fee: 1,
        jse_fee: 1,
        jcsd_fee: 1,
        gct_fee: 1,
        broker_fee_calculation: 1,
        jse_fee_calculation: 1,
        jcsd_fee_calculation: 1,
        gct_fee_calculation: 1,
        total_payable: 1255,
        expiry_date: orderExpireDate + ' 23:59:59',
        order_date: marketOpenDate + ' 23:59:59',
        order_save_date: marketOpenDate + ' 23:59:59',
    };

    var return1 = await EquityOrders.saveEquityOrder(orderDetails);
    console.log(return1);

    res.success(return1);


}