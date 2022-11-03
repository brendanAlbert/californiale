import React from "react";
import Image from "next/image";
import { useStore } from "../store/store";
import styles from "../styles/Guesses.module.css";
import useThemeService from "../services/useThemeService";

const Guesses = () => {
    const { guesses, guessIndex, todaysState, possibleArrowSvgs } = useStore();

    const mapDirectionToRotation = (direction: string) => {
        let result = "0deg";
        switch (direction) {
            case "up":
            case "co": // correct
                result = "-90deg";
                break;
            case "ur":
                result = "-45deg";
                break;
            case "rt":
                result = "0deg";
                break;
            case "dr":
                result = "45deg";
                break;
            case "dn":
                result = "90deg";
                break;
            case "dl":
                result = "-225deg";
                break;
            case "lt":
                result = "-180deg";
                break;
            case "ul":
                result = "-135deg";
                break;
        }
        return result;
    };

    const { palette } = useThemeService();

    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                }}
            >
                {guesses?.map((g, index) => (
                    <div
                        key={index}
                        className={
                            g?.name !== "" &&
                            index + 1 === guessIndex &&
                            g?.name !== todaysState
                                ? styles.shake
                                : ""
                        }
                        style={{
                            color: "#FFF",
                            fontWeight: 600,
                            backgroundColor:
                                g?.direction === "co"
                                    ? palette.green2
                                    : palette.row,
                            borderRadius: "4px",
                            borderTop: "2px solid #000",
                            borderRight: "2px solid #000",
                            borderLeft: "2px solid #000",
                            borderBottom: "5px solid #000",
                            marginBottom: "3px",
                            textAlign: "center",
                            alignItems: "center",
                            height: "auto",
                            width: "340px",
                            display: "grid",
                            gridTemplateColumns: "4fr 1fr 1fr 1.25fr",
                        }}
                    >
                        <span
                            style={{
                                textAlign: "center",
                            }}
                        >
                            {g?.name}
                        </span>

                        <span>
                            {g?.distance >= 0 ? g?.distance + "kms" : ""}
                        </span>
                        <span
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                width="34px"
                                height="34px"
                                style={{
                                    visibility: !g?.direction
                                        ? "hidden"
                                        : "visible",
                                    transform: `rotate(${mapDirectionToRotation(
                                        g?.direction
                                    )})`,
                                }}
                                src={`${
                                    g?.direction === "co"
                                        ? "/correct.svg"
                                        : `/arrows/${possibleArrowSvgs[index]}.svg`
                                }`}
                                alt=""
                            />
                        </span>
                        <span style={{ textAlign: "start" }}>
                            {g?.proximity > -1 ? g?.proximity + "%" : ""}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Guesses;
