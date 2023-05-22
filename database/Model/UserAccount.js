const helper = require('../../helper')
const { userAccountSchema, mongoose } = require('../schemas/user.account.schema')

const userAccount = new mongoose.model("UserAccount", userAccountSchema)


exports.getUserAccounts = async function (userDetails) {

    const sql = await helper.dbConnection('sqlsrv');

    const resultnew = await sql.query(`SELECT dbo.Trn_entite_client.num_ib as account_number ,
    '0' As is_minor,
        dbo.Trn_entite_client.num_trn AS trn,
            dbo.Ib.Description AS account_title,
                dbo.Entite_client.Categ_client as account_type,
                dbo.Gerant.Nom AS account_manager,
                    dbo.Gerant.Code_gerant AS account_manager_code,
                        dbo.Ism_id_cli.id_client AS jcsd,
                            dbo.Ib_entite.Prenom as first_name,
                            dbo.Ib_entite.Nom as last_name,
                            '1' AS is_primary
   FROM dbo.Trn_entite_client
   LEFT JOIN dbo.Ib ON Ib.Num_ib = dbo.Trn_entite_client.num_ib
   LEFT JOIN dbo.Entite_client ON dbo.Entite_client.Num_ib = dbo.Trn_entite_client.num_ib
   LEFT JOIN dbo.Gerant ON dbo.Gerant.Code_gerant = dbo.Entite_client.Code_gerant
   LEFT JOIN dbo.Ism_id_cli ON dbo.Trn_entite_client.Num_ib = dbo.Ism_id_cli.Num_ib AND dbo.Ism_id_cli.ent_recon = 'JCSD'
   LEFT JOIN dbo.Ib_entite ON dbo.Ib_entite.Num_ib = dbo.Ib.Num_ib
   WHERE dbo.Trn_entite_client.num_trn = '001652907' AND dbo.Ib.Inactif = 0

    UNION
   
   SELECT dbo.IB_Titulaire_Compte.Num_ib as account_number,
        dbo.IB_Titulaire_Compte.Mineur as is_minor,
        dbo.IB_Titulaire_Compte.num_trn as trn,
        dbo.Ib.Description AS account_title,
            dbo.Entite_client.Categ_client as account_type,
            dbo.Gerant.Nom AS account_manager,
                dbo.Gerant.Code_gerant AS account_manager_code,
                    dbo.Ism_id_cli.id_client AS jcsd,
                        dbo.IB_Titulaire_Compte.Prenom as first_name,
                        dbo.IB_Titulaire_Compte.Nom_1 as last_name,
                        '0' AS is_primary
   FROM dbo.IB_Titulaire_Compte
   LEFT JOIN dbo.Ib ON Ib.Num_ib = dbo.IB_Titulaire_Compte.num_ib
   LEFT JOIN dbo.Entite_client ON dbo.Entite_client.Num_ib = dbo.IB_Titulaire_Compte.num_ib
   LEFT JOIN dbo.Gerant ON dbo.Gerant.Code_gerant = dbo.Entite_client.Code_gerant
   LEFT JOIN dbo.Ism_id_cli ON dbo.IB_Titulaire_Compte.Num_ib = dbo.Ism_id_cli.Num_ib AND dbo.Ism_id_cli.ent_recon = 'JCSD'
   INNER JOIN dbo.Categorie_lg ON Categorie_lg.Code_categ = Entite_client.Categ_client
   WHERE dbo.IB_Titulaire_Compte.num_trn = '001652907' AND dbo.Ib.Inactif = 0
   AND Categorie_lg.Code_categ = 'IND'         -- Individual
    AND Categorie_lg.Code_langue = 'ENG'`);

    const data = helper.emptyOrRows(resultnew);
    return data;
}


exports.deleteAccountsDetails = async (userId) => {
    try {
        //...
        await userAccount.deleteMany({ user_id: userId });
        //...
    } catch (err) {
        throw new Error(err)
    }

}

exports.getUserDemographicsByAccountNumber = async (accountNumber) => {
    //...
    return await userAccount.findOne({ account_number: accountNumber });
    //...
}

exports.saveUserAccounts = async (userAccountDetails) => {
    //...
    await userAccount.insertMany(userAccountDetails);
    //...
}

exports.userAccount = userAccount;

