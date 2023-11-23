import {routes as home} from "../views/home";
import {routes as gameRoom} from "../views/game_room";
import {routes as notFound} from "../views/not_found";

export default [
  ...home,
  ...gameRoom,
  ...notFound,
  {
    path: "*",
    redirect: {name: "not_found",},
  },
];
