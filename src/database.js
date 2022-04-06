const mongo = require('mongoose')
uri=('mongodb://localhost/BasesTest')
mongo.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( data => console.log('DB is connect'))
    .catch( err => console.log(err));

module.exports = mongo;