const db = require('./db');
const helper = require('../helper');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, 10);

  const rows = await db.query(
    `SELECT *
    FROM users  LIMIT ?,?`, 
    [offset, 2]
  );

// const rows =User.findAll();

  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}