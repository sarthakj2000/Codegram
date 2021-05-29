const mongoose = require('mongoose');

mongoose.connect( 'mongodb://localhost/codegram_development', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));
    const db=mongoose
module.exports=db;