var StudentserviceHandler = function(that,cds) {

    // Read on,before after events
    // that.before('READ','Students', async req => {
    //     console.log('Entered Before Functionality')
    // })

    // Commenting on Read to get default table behaviour
    // that.on('READ','Students',async req => {
    //     console.log('Entered Read');
    //     req.reply({name:'Sakthi'});
       
    // })

    // that.after('READ','Students',async req => {
    //     req[0].name = 'vel'
    //     console.log('Entered Read');
    // })


    //Insert on,before,after events
    // that.before('CREATE','Students' ,async req => {
    //     console.log('Create entered before')
    // })

    that.on('CREATE','Students', async req =>{
        let InputData = req.data
        let DataPresentInFeesDetails = []
        try{
            DataPresentInFeesDetails = await SELECT.from('TUTORIALDEMO_FEESDETAILS').where({student_id:InputData.ID});
        }
        catch(error){
            req.reject(
                {code:"502",
                 message:'Error While retrieving the data'
                })
        }
        if(DataPresentInFeesDetails.length > 0 && DataPresentInFeesDetails[0].FEES_PAID_FOR_CURRENT_YEAR){
            try{
            await INSERT.into('TUTORIALDEMO_STUDENTS').entries(req.data)
            req.data.valueCreated = 'X'
            req.reply(req.data)
            }
            catch(error){
                req.reject({
                    code:'502',
                    message:'Error while Inserting Records in Students Table'
                });
            }
        }
        else{
            req.reject({
                code:'502',
                message:'No data found in Fees Details Table'
            });
        }
           console.log('End Part of Created on');
    });

    that.after('CREATE','Students' ,async req =>{
        console.log('Entered After')
    })

}

module.exports = StudentserviceHandler;