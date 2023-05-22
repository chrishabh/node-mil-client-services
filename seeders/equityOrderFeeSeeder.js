const {
    equityOrderFee,
    saveEquityOrderFee,
    deleteEquityOrderFees
} = require('../database/Model/EquityOrderFee');
const mongoose = require('mongoose');


//for use env varables
const dotenv = require('dotenv');

dotenv.config();
const env = process.env;
const url = env.DB_CLOUD;

async function dbConnection() {
    await mongoose.connect('mongodb+srv://AkashTyagi874:sjNwX2J95gNrcfPK@cluster0.ywlpj.mongodb.net/devmil?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log(`Successfully Connected to ${url}`));
}



async function seeder() {
    const feeTypes = [
        {
            fee_type: 'broker',
            fee_percentage: '0.02'
        },
        {
            fee_type: 'jse',
            fee_percentage: '0.0033'
        },
        {
            fee_type: 'jcsd',
            fee_percentage: '0.02'
        },
        {
            fee_type: 'gct',
            fee_percentage: '0.165'
        }
    ];

    await dbConnection();
    await deleteEquityOrderFees();
    let result = await saveEquityOrderFee(feeTypes).then(() => {
        mongoose.disconnect();
        console.log(`Successfully seed data.`)
    });
}

seeder()
