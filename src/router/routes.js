import {routes as gameRoom} from "../views/game_room";
import {routes as login} from "../views/login";
import {routes as home} from "../views/home";

export default [
  ...gameRoom,
  ...login,
  ...home,
];
