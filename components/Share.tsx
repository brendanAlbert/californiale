import React, { useEffect, useMemo, useState } from "react";
import { Directions } from "../enums/directions";
import { getShareText } from "../services/shareScoreService";
import CopyToClipboard from "react-copy-to-clipboard";
import { useStore } from "../store/store";
import styles from "../styles/Share.module.css";
import { ToastStates } from "../interfaces/modalStates";

const Share = () => {
    const { guesses, gameOver, todaysIndex, todaysState, setToastState } =
        useStore();

    const [clipboardText, setClipboardText] = useState("");

    const getClipboardText = useMemo(() => {
        let guessesNumbersArray: any[] = [];
        guesses
            ?.filter((g) => g?.distance > -1)
            ?.map((g) => {
                let newArray = [];
                if (g?.proximity >= 20) newArray.push(2);
                else if (g?.proximity >= 5) newArray.push(1);
                else newArray.push(0);

                if (g?.proximity >= 40) newArray.push(2);
                else if (g?.proximity >= 25) newArray.push(1);
                else newArray.push(0);

                if (g?.proximity >= 60) newArray.push(2);
                else if (g?.proximity >= 45) newArray.push(1);
                else newArray.push(0);

                if (g?.proximity >= 80) newArray.push(2);
                else if (g?.proximity >= 65) newArray.push(1);
                else newArray.push(0);

                if (g?.proximity === 100) newArray.push(2);
                else if (g?.proximity >= 85) newArray.push(1);
                else newArray.push(0);

                if (g?.direction === Directions.correct) newArray.push(19);
                else if (g?.direction === Directions.up) newArray.push(12);
                else if (g?.direction === Directions.upRight) newArray.push(10);
                else if (g?.direction === Directions.right) newArray.push(8);
                else if (g?.direction === Directions.downRight)
                    newArray.push(6);
                else if (g?.direction === Directions.down) newArray.push(4);
                else if (g?.direction === Directions.downLeft)
                    newArray.push(18);
                else if (g?.direction === Directions.left) newArray.push(16);
                else if (g?.direction === Directions.upLeft) newArray.push(14);

                guessesNumbersArray.push(newArray);
            });

        const scoresText = getShareText(guessesNumbersArray);

        const filteredGuesses = guesses.filter((val) => !!val?.name);

        const numOrX =
            filteredGuesses?.length < 6
                ? filteredGuesses?.length
                : filteredGuesses[filteredGuesses?.length - 1].name ===
                  todaysState
                ? "6"
                : "X";
        const firstLine = `californiale #${todaysIndex} ${numOrX}/6`;
        return (
            firstLine + "\n" + scoresText + "https://californiale.netlify.app"
        );
    }, [guesses, todaysIndex, todaysState]);

    useEffect(() => {
        if (gameOver) {
            setClipboardText(getClipboardText);
        }
    }, [gameOver, getClipboardText]);

    return (
        <>
            <div
                style={{
                    width: "100%",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <CopyToClipboard text={clipboardText}>
                        <button
                            onClick={() => {
                                setToastState(ToastStates.copied);
                            }}
                            tabIndex={0}
                            style={{
                                cursor: "pointer",
                                fontSize: "20px",
                                backgroundColor: "#218c74",
                                borderRadius: "4px",
                                padding: "8px 12px",
                                color: "#FFF",
                            }}
                            className={styles.shareButton}
                        >
                            Share
                        </button>
                    </CopyToClipboard>
                </div>
            </div>
        </>
    );
};

export default Share;
