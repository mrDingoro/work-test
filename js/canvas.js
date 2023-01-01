import Game from "./components/Game.js";
import Player from "./components/Player.js";
import Controller from "./components/Controller.js";

import { addListenersKeyDown,addListenersKeyUp } from "./utils/listeners/index.js";



let currentGame = new Game(
    Player,
    Controller,
    addListenersKeyUp,
    addListenersKeyDown
);

