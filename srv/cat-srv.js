const cds = require('@sap/cds');

module.exports = cds.service.impl( async function() {
    const CntSrv = await cds.connect.to("API_COUNTRY_SRV");
    this.on("READ", "Countries", async(req) => {
        req.query.where("Country <> '' ")
        return await CntSrv.transaction(req).send({
            query: req.query,
            headers: {
                apikey: process.env.apikey
            }
        })
    })
});