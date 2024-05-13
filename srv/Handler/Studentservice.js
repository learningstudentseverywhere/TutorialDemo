var StudentserviceHandler = function(that,cds) {

    // Read on,before after events
    that.before('READ','Students', async req => {
        console.log('Entered Before Functionality')
    })

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
    that.before('CREATE','Students' ,async req => {
        console.log('Create entered before')
    })

    // that.on('CREATE','Students', async req =>{
    //        console.log('Create Entered on')
    // });

    that.after('CREATE','Students' ,async req =>{
        console.log('Entered After')
    })

}

module.exports = StudentserviceHandler;