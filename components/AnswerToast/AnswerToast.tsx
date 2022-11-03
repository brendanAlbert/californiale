import React, { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import styles from "../../styles/AnswerToast.module.css";

export const AnswerToast = () => {
    const { todaysState, gameOver } = useStore();
    const [isAnswerToastOpen, setIsAnswerToastOpen] = useState(false);

    useEffect(() => {
        if (gameOver) {
            setIsAnswerToastOpen(true);
        }
    }, [gameOver]);

    return (
        <>
            <div
                className={
                    isAnswerToastOpen
                        ? `${styles.show} ${styles.answerToast}`
                        : `${styles.hide} ${styles.answerToast}`
                }
            >
                <span>
                    Answer:{" "}
                    <span style={{ color: "green", fontWeight: 600 }}>
                        {todaysState}
                    </span>
                </span>
                <span
                    className={styles.closer}
                    onClick={() => setIsAnswerToastOpen(false)}
                >
                    x
                </span>
            </div>
        </>
    );
};
