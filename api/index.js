const { log } = require('console')
const {express, routes} = require('./controller/index.js')
const path = require('path')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorHandling = require('./middleware/ErrorHandling')
const port = +process.env.PORT || 3030
const bodyParser = require('body-parser')

//static
// Middleware - APplication level
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
  });
app.use(
    express.static('./static'),
    express.urlencoded({
        extended: false
    }),
    cookieParser(),
    bodyParser(),
    cors(),
    routes
    )

routes.get('^/$|/capstone_project', 
(req, res) => {
    res.sendFile(path.resolve(__dirname,
        "../api/static/html/index.html"))
})
// cookieParser & Router
// cookieParser should be set before router
app.use(cookieParser(), cors(), routes);
app.use(
  express.json(),
  express.urlencoded({
    extended: true,
  })
);
// Handling all errors
app.use(errorHandling);

app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);
    
})