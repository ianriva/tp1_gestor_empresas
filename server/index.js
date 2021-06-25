const express = require("express");
const app = express();
const morgan = require('morgan')
const cors = require("cors")
require('dotenv').config()

const port = process.env.PORT || 3002

const db = require('./models');
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// Routers
const companyRouter = require("./routes/Company");
app.use("/companies", companyRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
    
