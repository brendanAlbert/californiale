import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "../styles/Input.module.css";
import { useStore } from "../store/store";
import { getLatLonStateObject } from "../services/statesLatLongCoordinateService";
import { distance } from "../services/calculateLatLongDistance";
import { calculatePercentage } from "../services/calculateProximityPercentage";
import { calculateDirectionService } from "../services/calculateDirectionService";
import { counties } from "../store/counties";

const Input = () => {
    const { states, todaysState, statesListOpen, setStatesListOpenState } =
        useStore();
    const [userInput, setUserInput] = useState("");
    const { addGuess } = useStore();

    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLUListElement>(null);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [filteredCounties, setFilteredCounties] = useState(counties);

    const handleUserInput = (e: any) => {
        setUserInput(e.target.value);
    };

    const handleSubmitGuess = () => {
        if (!userInput) return;

        setStatesListOpenState(false);

        const guessLatLonObject = getLatLonStateObject(userInput);
        const answerLatLonObject = getLatLonStateObject(todaysState);
        const dist = distance(
            guessLatLonObject.lat,
            guessLatLonObject.lon,
            answerLatLonObject.lat,
            answerLatLonObject.lon
        );

        addGuess({
            name: userInput,
            direction: calculateDirectionService(
                guessLatLonObject.lat,
                guessLatLonObject.lon,
                answerLatLonObject.lat,
                answerLatLonObject.lon,
                dist
            ),
            distance: dist,
            proximity: calculatePercentage(
                guessLatLonObject,
                answerLatLonObject
            ),
        });
        setUserInput("");
    };

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target != inputRef.current) return;
            switch (e.code) {
                case "Enter":
                case "Space":
                    setStatesListOpenState(!statesListOpen);
                    if (statesListOpen) {
                        setUserInput(filteredCounties[highlightedIndex]);
                    } else {
                        if (!!userInput) {
                            handleSubmitGuess();
                        }
                    }
                    break;
                case "ArrowUp":
                case "ArrowDown": {
                    if (!statesListOpen) {
                        setStatesListOpenState(true);
                        break;
                    }

                    const newValue =
                        highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
                    if (newValue >= 0 && newValue < filteredCounties.length) {
                        setHighlightedIndex(newValue);
                    }
                    if (
                        scrollRef &&
                        scrollRef.current &&
                        highlightedIndex > 5
                    ) {
                        scrollRef.current.scrollBy(
                            0,
                            e.code === "ArrowDown" ? 43 : -43
                        );
                    }
                    break;
                }
                case "Escape":
                    setStatesListOpenState(false);
                    break;
            }
        };
        inputRef.current?.addEventListener("keydown", handler);

        return () => {
            inputRef.current?.removeEventListener("keydown", handler);
        };
    }, [statesListOpen, highlightedIndex, filteredCounties]);

    useEffect(() => {
        if (statesListOpen) setHighlightedIndex(0);
    }, [statesListOpen]);

    const StatesDropdown = useMemo(() => {
        const filteredOptions = [...states].filter((state) =>
            state.includes(userInput.toLowerCase())
        );

        setFilteredCounties(filteredOptions);
        return (
            <ul
                ref={scrollRef}
                style={{
                    height: "auto",
                    maxHeight: "300px",
                    overflowY: "scroll",
                    width: "100%",
                    background: "#264653",
                    padding: "12px 0px 12px 0px",
                    borderRadius: "4px",
                    position: "absolute",
                    bottom: "80px",
                    left: "0px",
                    zIndex: 3,
                }}
            >
                {filteredOptions.map((s, index) => (
                    <li
                        tabIndex={0}
                        className={styles.guessOption}
                        key={index}
                        aria-labelledby={`option-${s}`}
                        style={{
                            display: "flex",
                            textTransform: "capitalize",
                            alignItems: "center",
                            cursor: "pointer",
                            paddingTop: "12px",
                            paddingLeft: "12px",
                            paddingBottom: "12px",
                            backgroundColor:
                                index === highlightedIndex ? "#2a9d8f" : "",
                        }}
                        onClick={() => {
                            setUserInput(s);
                            setStatesListOpenState(false);
                        }}
                    >
                        {s}
                    </li>
                ))}
            </ul>
        );
    }, [statesListOpen, highlightedIndex, userInput]);

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
                    <input
                        ref={inputRef}
                        autoComplete="off"
                        onFocus={() => {
                            setStatesListOpenState(true);
                        }}
                        onChange={(e) => {
                            if (!statesListOpen) {
                                setStatesListOpenState(true);
                            }

                            handleUserInput(e);
                        }}
                        id="input"
                        className={styles.input}
                        value={userInput}
                        style={{
                            cursor: "pointer",
                            borderRadius: "4px",
                            backgroundColor: "transparent",
                            borderTop: "2px solid #111",
                            borderRight: "2px solid #111",
                            borderLeft: "2px solid #111",
                            borderBottom: "5px solid #111",
                            padding: "16px",
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "#111",
                            width: "100%",
                            height: "44px",
                            textTransform: "capitalize",
                            marginTop: "2px",
                        }}
                        placeholder="enter state . . ."
                        type="text"
                    />
                    <button
                        className={styles.guessButton}
                        tabIndex={statesListOpen ? -1 : 0}
                        onClick={() => handleSubmitGuess()}
                        style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            borderRadius: "4px",
                            padding: "6px 12px",
                            marginTop: "4px",
                            borderTop: "2px solid #111",
                            borderRight: "2px solid #111",
                            borderLeft: "2px solid #111",
                            borderBottom: "5px solid #111",
                            color: "#FFF",
                            height: "44px",
                        }}
                    >
                        Guess
                    </button>
                </div>
                {statesListOpen && StatesDropdown}
            </div>
        </>
    );
};

export default Input;
