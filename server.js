const express = require('express');
const app = express();
const routesReport = require('rowdy-logger').begin(app);
const env = require('dotenv');

app.use(require('morgan')('tiny'));
app.use(express.json());
app.use(require('cors')());

const userRoutes = require('./routes/userRoute');
app.use('/user', userRoutes);

const siteRoutes = require('./routes/siteRoute');
app.use('/site', siteRoutes);

env.config();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('server listening on ${PORT}');
    routesReport.print()
});