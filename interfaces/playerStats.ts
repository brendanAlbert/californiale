export interface IPlayerStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  scoreDist: number[];
  todaysPuzzlePlayed: boolean;
  dayLastPlayed: string | null;
}
