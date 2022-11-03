import { IGuessObject } from "./guessObject";

export interface IBoardState {
  gameOver: boolean;
  guessIndex: number;
  guesses: IGuessObject[];
}
