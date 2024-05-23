// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер

const {
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile,
    findGameById,
    deleteGame
} = require("../middlewares/games");
const { sendAllGames, sendUpdatedGames } = require("../controllers/games");

gamesRouter.get("/games", getAllGames, sendAllGames);

gamesRouter.post(
    "/games",
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile,
    sendUpdatedGames
);

gamesRouter.delete(
    "/games/:id",
    getAllGames,
    findGameById,
    deleteGame,
    updateGamesFile,
    sendUpdatedGames
);

module.exports = gamesRouter;