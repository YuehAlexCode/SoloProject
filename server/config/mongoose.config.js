const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/tourneydb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Connected to tourneydb database!`))
.catch((err)=>console.log(err));