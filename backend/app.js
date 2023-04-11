const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require('cors');
const errorMiddleware = require("./middleware/error");

const app = express();
// // CORS error fix..
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

app.use(express.json());
// app.use(cookieParser());
// app.use(cors(corsOptions));
//Route Imports
    const questionRoutes = require("./routes/questionRoutes");
    const resultRoutes = require("./routes/resultRoute");

    app.use("/api/v1", questionRoutes);
    app.use("/api/v1", resultRoutes);

// MiddleWare for Error

app.use(errorMiddleware);

module.exports = app;
