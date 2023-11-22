// require("dotenv").config();
// const bodyParser = require("body-parser");
// const express = require("express");
// const userRouter = require("./routes/userRouters/user.routes");
// const questionRouter = require("./routes/questionRouters/question.routes");
// const ideasRouter = require("./routes/ideaRouters/ideas.routes");
// const eventRouter=require('./routes/eventRouter/event.routes');
// const leaderRouter=require("./routes/leadersRoutes/leaders.routes");
// const swaggerSpec=require("./utils/swagger");
// const swaggerUi = require('swagger-ui-express')
// const cors=require('cors')
// // const { mysqlConnect } = require("./config/mysql");
// const { pool } = require("./config/mysql");
// const fileUpload = require("express-fileupload");
// const app = express();


// const PORT = process.env.PORT;

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({
//   origin:"http://localhost:5173",
//   credentials:true
// }))
// /* FILE UPLOAD */
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );


// /* MYSQL Connect */
// // mysqlConnect();
// pool


// /* ROUTES */
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/questions", questionRouter);
// app.use("/api/v1/ideas", ideasRouter);
// app.use("/api/v1/events", eventRouter);
// app.use("/api/v1/leaders", leaderRouter);


// /* SWAGGER */
// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// // app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));


// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${PORT}...`);
// });
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const { Sequelize } = require('sequelize');
const fileUpload = require("express-fileupload");
const cors = require('cors');
const userRouter = require("./routes/userRouters/user.routes");
const questionRouter = require("./routes/questionRouters/question.routes");
const ideasRouter = require("./routes/ideaRouters/ideas.routes");
const eventRouter=require('./routes/eventRouter/event.routes');
const leaderRouter=require("./routes/leadersRoutes/leaders.routes");
const swaggerSpec=require("./utils/swagger");
const swaggerUi = require('swagger-ui-express')
const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: "*",
  credentials: true
}));

/* FILE UPLOAD */
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

/* SEQUELIZE Initialization */
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 5432,
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('PostgreSQL connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


/* ROUTES */
app.use("/api/v1/users", userRouter);
app.use("/api/v1/questions", questionRouter);
app.use("/api/v1/ideas", ideasRouter);
app.use("/api/v1/events", eventRouter);
app.use("/api/v1/leaders", leaderRouter);

/* SWAGGER */
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
