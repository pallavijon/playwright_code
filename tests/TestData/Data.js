const base = require('@playwright/test')

exports.customTest = base.test.extend(
    {
    testdataForContactUs:{
        firstName :"pallavi",
        lastName:"jagtap",
        email:"pallavijon290197@gmail.com",
        msg:"I am learning JavaScript"
    }
})