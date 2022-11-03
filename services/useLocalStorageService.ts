import moment from "moment";
import { useEffect, useState } from "react";
import { IBoardState } from "../interfaces/boardState";
import { IPlayerStats } from "../interfaces/playerStats";
import { useStore } from "../store/store";

const statsSaveName = "californialeStats";
const boardStateSaveName = "californialeBoardState";
const useLocalStorageService = () => {
    const { setPlayerStats } = useStore();
    const [lsBoardState, setLsBoardState] = useState<IBoardState>(
        {} as IBoardState
    );
    const [lsStats, setLsStats] = useState<IPlayerStats>({} as IPlayerStats);

    useEffect(() => {
        const lstats = localStorage.getItem(statsSaveName);

        const stats: IPlayerStats = lstats
            ? JSON.parse(lstats)
            : {
                  gamesPlayed: 0,
                  gamesWon: 0,
                  currentStreak: 0,
                  maxStreak: 0,
                  scoreDist: [0, 0, 0, 0, 0, 0, 0],
                  todaysPuzzlePlayed: false,
                  dayLastPlayed: null,
              };

        const playedToday =
            stats?.dayLastPlayed === moment().format("MM/DD/YYYY");

        stats.todaysPuzzlePlayed = playedToday;

        setLsStats(stats);
        setPlayerStats(stats);

        const lsbs = localStorage.getItem(boardStateSaveName);

        const boardState: IBoardState =
            lsbs && playedToday
                ? JSON.parse(lsbs)
                : {
                      gameOver: false,
                      guessIndex: 0,
                      guesses: [null, null, null, null, null, null],
                  };
        setLsBoardState(boardState);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { lsStats, lsBoardState, saveNewStatsInLocalStorage };
};

export default useLocalStorageService;

export const saveNewStatsInLocalStorage = (newStats: IPlayerStats) => {
    localStorage.setItem(statsSaveName, JSON.stringify(newStats));
};

export const saveNewBoardStateInLocalStorage = (newBoardState: IBoardState) => {
    localStorage.setItem(boardStateSaveName, JSON.stringify(newBoardState));
};
