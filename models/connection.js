const mongoose=require('mongoose')


mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then((result)=>{
    console.log("DataBase Connected");
}).catch((err)=>{
    console.log(err)
})

module.exports=mongoose;