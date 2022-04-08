const mongo = require('mongoose')
//uri=('mongodb://localhost/BasesTest')
uri=('mongodb://uxghgh4iwlhri0ewumpj:EecihdRwN2UrgiDdlABR@biavrh7viutgdfb-mongodb.services.clever-cloud.com:27017/biavrh7viutgdfb')
mongo.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( data => console.log('DB is connect'))
    .catch( err => console.log(err));

module.exports = mongo;