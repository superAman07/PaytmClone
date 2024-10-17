const express = require("express");
// const userRouter = require("./user");
const rootRouter = require("./routes/index");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter); 

// module.exports = router;
// const User = require("./db");
// const express = require("express"); 
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());
// const mainRouter = require('./routes/index');

// const app = express();
// app.use("/api/v1",mainRouter); 






// app.use(express.json());
// app.post("/create-user",(req,res)=>{
//     const {name,username,password}=req.body;
//     const newUser=new User({
//         name,
//         username,
//         password,
//     });
//     newUser.save()
//         .then(()=>res.status(201).send('User created successfully'))
//         .catch(err=>res.status(500).send('Failed to create user',err));
// });
// app.get("/",(req,res)=>{
//     User.find()
//         .then(users => res.json(users))
//         .catch(err => res.status(500).send('Failed to retrieve users: ' + err));
// });
app.listen(port,()=>{
    console.log(`Server running at ${port}`);
});