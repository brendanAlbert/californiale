import { IStatele } from "../interfaces/IStatele";
import { distance } from "./calculateLatLongDistance";

// max distance is from del norte to imperial - ~1249 kms

export const calculatePercentage = (guess: IStatele, answer: IStatele) => {
    const d = distance(guess.lat, guess.lon, answer.lat, answer.lon);

    const progress = 100 - (d / 1249) * 100;

    return parseInt(progress.toString());
};
