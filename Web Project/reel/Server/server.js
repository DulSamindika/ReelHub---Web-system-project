const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const connectDB = require('./Database/connect');

const register = require("./routes/register.route");
const login = require('./routes/login.route');
const createPost = require('./routes/createPost.route.js');
const getPosts = require('./routes/getPosts.route.js');
const createJob = require('./routes/createJob.route.js');
const getJobs = require('./routes/getJob.route.js');
const editBio = require('./routes/editBio.route.js');
const getBio = require('./routes/getBio.route.js');
const getUser = require('./routes/getUser.route.js')
const editProfile = require('./routes/editProfile.route.js')
const path = require('path');

const PORT = 5000;
dotenv.config();

connectDB(process.env.MONGO_URL);
//.then(() => {
    //console.log("DB connected");}).catch((err)=> {console.log(err);});
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use('/Images', express.static(path.join(__dirname, 'public', 'Images')))
app.use("/reg", register);
app.use('/login',login);
app.use('/create',createPost);
app.use('/getPosts',getPosts);
app.use('/createJob', createJob);
app.use('/getJob', getJobs);
app.use('/editBio', editBio);
app.use('/getBio', getBio);
app.use('/getUser', getUser);
app.use('/editProfile', editProfile);


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})
