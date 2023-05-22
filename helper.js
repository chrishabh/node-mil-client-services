const db = require('./config')
const sql = require("mssql");

function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

async function dbConnection(database) {
  try {
    console.log("Connecting to database")
    switch (database) {
      case "sqlsrv":
        result = await sql.connect(db.sqlsrv);
        break;
      default:
        result = await sql.connect(db.sqlsrv);
        break;
    }
    console.log("Connected to database")
  } catch (err) {
    result = err
    console.log("ERROR OCCURRED " + err)
  }

  return sql;
}


async function getAllEquityFee(amount, jse, broker, gct) {
  // this.TotalExchangeFees
  var TotalExchangeFees = amount * jse;

  /*-----------EstimatedCommission => this.TransactionAmount * this.CommissionPercentage-------*/
  EstimatedCommission = amount * broker;

  /*-----------GeneralConsumptionTax => (this.TotalExchangeFees + this.EstimatedCommission) * this.GCTPercentage---*/
  GeneralConsumptionTax = (TotalExchangeFees + EstimatedCommission) * gct;

  /*------------TotalFees => this.TotalExchangeFees + this.EstimatedCommission + this.GeneralConsumptionTax-------*/

  TotalFees = TotalExchangeFees + EstimatedCommission + GeneralConsumptionTax;
  // return [
  //   'jse_fee' = TotalExchangeFees,
  //   'broker_fee' = EstimatedCommission,
  //   'gct_fee' = GeneralConsumptionTax,
  //   'jcsd_fee' = 0
  // ];
}

module.exports = {
  getOffset,
  emptyOrRows,
  dbConnection,
  getAllEquityFee
}