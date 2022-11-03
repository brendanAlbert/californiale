import { Directions } from "../enums/directions";

export interface IGuessObject {
  name: string;
  direction: string | Directions;
  distance: number; // how far in miles/km to answer state
  proximity: number; // percentage
}
