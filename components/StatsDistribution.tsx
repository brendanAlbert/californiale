import React, { useEffect, useState } from "react";
import { ModalStates } from "../interfaces/modalStates";
import { useStore } from "../store/store";
import styles from "../styles/StatsDistribution.module.css";

const StatsDistribution = () => {
    const { stats, modalState } = useStore();
    const [scoreDist, setScoreDist] = useState<number[]>([]);
    const [growTime, setGrowTime] = useState(false);

    const indexToColumnMap = (index: number) => {
        const indexColumnMap: { [key: string]: number } = {
            6: 0,
            5: 1,
            4: 2,
            3: 3,
            2: 4,
            1: 5,
            0: 6,
        };
        return indexColumnMap[index];
    };

    useEffect(() => {
        const normalizedList = getNormalizedArray(stats?.scoreDist);
        setScoreDist(normalizedList);
    }, [stats]);

    useEffect(() => {
        if (modalState === ModalStates.stats) {
            setTimeout(() => setGrowTime(true), 50);
        } else if (modalState === ModalStates.closed) {
            setGrowTime(false);
        }
    }, [modalState]);

    const getNormalizedArray = (array: number[]) => {
        let totalFromAllDistColumns = array?.reduce(
            (prev, curr) => prev + curr,
            0
        );

        return array?.map((value) => {
            let quotient = value / totalFromAllDistColumns;
            quotient = !isNaN(quotient) ? quotient : 0;
            return 1 + Math.round(30 * quotient);
        });
    };

    return (
        <div
            style={{
                display: "flex",
                padding: "12px",
                justifyContent: "space-between",
                marginTop: "110px",
                transform: "rotateX(180deg) rotateY(180deg)",
            }}
        >
            {["X", 6, 5, 4, 3, 2, 1].map((col, colIndex) => {
                const localNum = scoreDist?.[indexToColumnMap(colIndex)];
                return (
                    <div
                        key={col}
                        style={{
                            width: "20px",
                            height: `100px`,
                            backgroundColor: "transparent",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                paddingTop: "10px",
                                transform: "rotateX(180deg) rotateY(180deg)",
                            }}
                        >
                            {col}
                        </div>

                        {Array.from(Array(localNum))?.map((_bar, index) => {
                            return (
                                <div
                                    className={`${styles.initial} ${
                                        growTime ? styles.grow : ""
                                    }`}
                                    key={index}
                                    style={{
                                        marginBottom: "1px",
                                        backgroundColor:
                                            col === "X" ? "#c1121f" : "green",
                                        transform:
                                            "rotateX(180deg) rotateY(180deg)",
                                    }}
                                ></div>
                            );
                        })}
                        <div
                            style={{
                                paddingTop: "10px",
                                transform: "rotateX(180deg) rotateY(180deg)",
                            }}
                        >
                            {stats?.scoreDist?.[indexToColumnMap(colIndex)]}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StatsDistribution;
