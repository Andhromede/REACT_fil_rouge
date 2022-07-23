require("./api/helpers/string.helper");
const express = require("express");
const app = express();
const routers = require('./api/routers');
const cors = require('cors');

const corsOption ={
  origin: ['http://localhost:3000'],
  credentials: true
};

app.use(cors(corsOption));
app.use(express.json());

let cookieParser = require('cookie-parser');
app.use(cookieParser());


const auth = require("./api/middlewares/auth.middleware");
// for(const route in routers){
//     app.use(`/${route}`, new routers[route]().router);
// }

for (const route in routers) {
  const router = new routers[route]().router;
  app.use(`/${route}`, router, auth);
}

const config = require("./api/configs/app.config");

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



// const express = require("express");
// const app = express();
// const PORT = 5002;


// app.use('/test', function(req, res){
//     res.send("Route '/test' ");
// });


// app.use('/', function(req, res){
//     res.send("Route '/' ");
// });


// app.listen(PORT, () =>{
//     console.log(`server is running on port ${PORT}`);
// });