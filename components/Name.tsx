import React from "react";
import useThemeService from "../services/useThemeService";
import styles from "../styles/Nav.module.css";

export const Name = () => {
    const { palette } = useThemeService();

    return (
        <>
            <span
                className={styles.textBorder}
                style={{
                    color: "#FFF",
                }}
            >
                Cal
            </span>
            <span
                className={styles.textBorder}
                style={{
                    color: palette.row,
                }}
            >
                ifo
            </span>
            <span
                className={styles.textBorder}
                style={{
                    color: palette.green2,
                }}
            >
                r
            </span>
            <span
                className={styles.textBorder}
                style={{
                    color: "#FFF",
                }}
            >
                nia
            </span>
            <span
                className={styles.textBorder}
                style={{
                    color: palette.green2,
                }}
            >
                le
            </span>{" "}
        </>
    );
};
