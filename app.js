const express = require("express");
require("./models/connection");
const user=require('./routes/userRouter')
const app = express();


app.use(express.json())
app.use('/user',user)
app.use('/album',require('./routes/album'))

app.listen(8000, () => {
  console.log("Server is Running On Port 8000");
});
