import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.routes';
import statusRoute from './routes/status.routes';
import errorHandler from './middlewares/error-handle.middlleware';
import authorizationRoute from './routes/authorization.routes';

const cors = require('cors');
// Importing the fs and https modules -------------- STEP 1
const https = require("https");
const fs = require("fs");

const app = express();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Mount express-sanitizer middleware here

// Server static html file to check if the server is working
app.use("/", express.static("public"));
const options = {
    key: fs.readFileSync("./cert.key"),
    cert: fs.readFileSync("./cert.crt"),
};
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    app.use(cors());
    next();
})

app.use(usersRoute);
app.use(statusRoute);
app.use(errorHandler);
app.use(authorizationRoute);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


https.createServer(options, app).listen(3000, () => {
    console.log(`HTTPS server started on port 8080`);
});