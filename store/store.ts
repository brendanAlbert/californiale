import create from "zustand";
import moment from "moment";
import { IGuessObject } from "../interfaces/guessObject";
import { ModalStates, ToastStates } from "../interfaces/modalStates";
import { IPlayerStats } from "../interfaces/playerStats";
import {
    saveNewStatsInLocalStorage,
    saveNewBoardStateInLocalStorage,
} from "../services/useLocalStorageService";
import { IBoardState } from "../interfaces/boardState";
import { preGeneratedCountiesMap } from "./preGeneratedAreasMap";
import { counties } from "./counties";

const possibleArrowSvgs = [
    "arrow1",
    "arrow2",
    "arrow3",
    "arrow4",
    "arrow5",
    "arrow6",
    "arrow7",
];

interface AppState {
    statesListOpen: boolean;
    possibleArrowSvgs: string[];
    stats: IPlayerStats;
    modalState: ModalStates;
    toastState: ToastStates;
    toastMsg: string;
    gameOver: boolean;
    guessIndex: number;
    todaysIndex: number;
    todaysState: string;
    states: string[];
    guesses: IGuessObject[];
    setTodaysState: (newState: string) => void;
    addGuess: (newGuess: IGuessObject) => void;
    setToastState: (newState: ToastStates) => void;
    setToastMsg: (newMsg: string) => void;
    setModalState: (newState: ModalStates) => void;
    setPlayerStats: (newStats: IPlayerStats) => void;
    setBoardState: (newBoardState: IBoardState) => void;
    setStatesListOpenState: (newState: boolean) => void;
}

const todaysDate = moment().format("MM/DD/YYYY");
const todaysCountyIndex = preGeneratedCountiesMap[todaysDate];
const index = Object.keys(preGeneratedCountiesMap).indexOf(todaysDate);

export const useStore = create<AppState>((set) => ({
    statesListOpen: false,
    possibleArrowSvgs: possibleArrowSvgs
        .sort(() => 0.5 - Math.random())
        .slice(0, 6),
    stats: {} as IPlayerStats,
    modalState: ModalStates.closed,
    toastState: ToastStates.closed,
    toastMsg: counties[todaysCountyIndex],
    todaysState: counties[todaysCountyIndex],
    gameOver: false,
    guessIndex: 0,
    guesses: Array.from(Array(6).keys()).map((_initialGuess) => {
        return {
            name: "",
            direction: "",
            distance: -1,
            proximity: -1,
        };
    }),
    todaysIndex: index,
    states: counties,
    setTodaysState: (newState) =>
        set((_state) => ({
            todaysState: newState,
        })),
    addGuess: (newGuess: IGuessObject) => {
        set((state) => {
            const ng = [...state.guesses];
            ng[state.guessIndex] = newGuess;

            const isGameOver =
                state.todaysState === newGuess.name || state.guessIndex >= 5;

            let newSaveStats: IPlayerStats = state.stats;
            if (isGameOver) {
                const currentStats = state.stats;

                const won = state.todaysState === newGuess.name;

                const newGamesPlayed = currentStats.gamesPlayed + 1;
                const newGamesWon = won
                    ? currentStats.gamesWon + 1
                    : currentStats.gamesWon;
                const newCurrentStreak = won
                    ? currentStats.currentStreak + 1
                    : 0;
                const newMaxStreak =
                    newCurrentStreak >= currentStats.maxStreak
                        ? newCurrentStreak
                        : currentStats.maxStreak;
                const newScoreDistribution = currentStats.scoreDist.map(
                    (score, index) =>
                        index === state.guessIndex && won
                            ? score + 1
                            : !won && index === state.guessIndex + 1
                            ? score + 1
                            : score
                );

                newSaveStats = {
                    gamesPlayed: newGamesPlayed,
                    gamesWon: newGamesWon,
                    currentStreak: newCurrentStreak,
                    maxStreak: newMaxStreak,
                    scoreDist: newScoreDistribution,
                    todaysPuzzlePlayed: true,
                    dayLastPlayed: moment().format("MM/DD/YYYY"),
                };
                saveNewStatsInLocalStorage(newSaveStats);
            }

            const newBoardState: IBoardState = {
                gameOver: isGameOver,
                guessIndex: state.guessIndex + 1,
                guesses: ng,
            };

            saveNewBoardStateInLocalStorage(newBoardState);

            return {
                guesses: ng,
                guessIndex: state.guessIndex + 1,
                gameOver: isGameOver,
                stats: newSaveStats,
            };
        });
    },
    setToastState: (newState: ToastStates) =>
        set((_state) => ({
            toastState: newState,
        })),
    setToastMsg: (newMsg: string) =>
        set((_state) => ({
            toastMsg: newMsg,
        })),
    setModalState: (newState: ModalStates) =>
        set((_state) => ({
            modalState: newState,
        })),
    setPlayerStats: (newStats: IPlayerStats) =>
        set((_state) => ({
            stats: newStats,
        })),
    setBoardState: (newBoardState: IBoardState) =>
        set((_state) => ({
            gameOver: newBoardState.gameOver,
            guessIndex: newBoardState.guessIndex,
            guesses: newBoardState.guesses,
        })),
    setStatesListOpenState: (newState: boolean) =>
        set((_state) => ({
            statesListOpen: newState,
        })),
}));
