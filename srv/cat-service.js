var StudentserviceHandler = require('./Handler/Studentservice');
const cds = require('@sap/cds')

module.exports = cds.service.impl(async function(){
    StudentserviceHandler(this,cds);
})


