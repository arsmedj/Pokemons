import {
  GiBroadsword,
  GiHearts,
  GiCrossedAxes,
  GiShieldReflect,
} from "react-icons/gi";
import { BsFillShieldSlashFill } from "react-icons/bs";
import { MdSpeed } from "react-icons/md";

export const BASE_URL = "https://pokeapi.co/api/v2/";
export const CONTENT_PER_PAGE = 12;

export const STATS_ICONS = new Map()
  .set("hp", GiHearts)
  .set("attack", GiBroadsword)
  .set("defense", BsFillShieldSlashFill)
  .set("special-attack", GiCrossedAxes)
  .set("special-defense", GiShieldReflect)
  .set("speed", MdSpeed);
