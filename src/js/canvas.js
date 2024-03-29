import Game from "./components/Game";
import Player from "./components/Player";
import Controller from "./components/Controller";

import { addListenersKeyDown, addListenersKeyUp } from "./utils/listeners";



let currentGame = new Game(
    Player,
    Controller,
    addListenersKeyUp,
    addListenersKeyDown
);

