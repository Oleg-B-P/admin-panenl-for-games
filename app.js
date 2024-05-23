const express = require('express');

const path = require('path');
const cors = require("./middlewares/cors")
const bodyParser = require('body-parser');
const mainRoute = require('./routs/main');
const gamesRouter = require('./routs/games');

const PORT = 3000;
const app = express();

app.use(
    cors, // Добавляем CORS самым первым
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
)

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})