const express = require('express');
const passport = require('passport');
const bodyParser = require("body-parser");
const cors = require('cors');
const authRoute = require("./Routes/AuthRoute");
const employeeRoute = require('./Routes/EmployeeRoute');

const app = express();

app.use(express.json());

// Body-Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSucessStatus: 200,
}

app.use(cors(corsOptions));

// MongoDB
const connectDB = require('./config/db');
connectDB();

// Authentication Router
app.use("/api/users", authRoute);
app.use('/api/employees', employeeRoute);

// Passport middleware
app.use(passport.initialize());

require('./config/passport')(passport);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));