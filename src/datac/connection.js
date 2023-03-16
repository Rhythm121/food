const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/Documents",{
  
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));