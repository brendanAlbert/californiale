import React, { useEffect, useState } from "react";
import useThemeService from "../services/useThemeService";
import styles from "../styles/Nav.module.css";
import { Name } from "./Name";

const Countdown = () => {
    const { palette } = useThemeService();

    const today = new Date();
    const tomorrow = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        0,
        0,
        0
    );

    const calcHrs = (distance: number): number =>
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const calcMins = (distance: number): number =>
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const calcSecs = (distance: number): number =>
        Math.floor((distance % (1000 * 60)) / 1000);

    const diff = tomorrow.getTime() - today.getTime();

    const [hrs, setHrs] = useState(calcHrs(diff));
    const [mins, setMins] = useState(calcMins(diff));
    const [secs, setSecs] = useState(calcSecs(diff));

    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1,
            0,
            0,
            0
        );
        const clearIndex = setInterval(function () {
            const today = new Date();
            const distance = tomorrow.getTime() - today.getTime();
            setHrs(calcHrs(distance));
            setMins(calcMins(distance));
            setSecs(calcSecs(distance));
            if (distance < 0) clearInterval(clearIndex);
        }, 1000);

        return () => {
            clearInterval(clearIndex);
        };
    }, []);

    return (
        <div
            style={{
                width: "100%",
                marginTop: "2px",
                marginBottom: "6px",
                borderRadius: "4px",
                backgroundColor: palette.nav,
                padding: "6px",
                fontWeight: 600,
                color: "#FFF",
                fontSize: "14px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}
        >
            <div>
                Next{" "}
                <span style={{ letterSpacing: "2px" }}>
                    <Name />
                </span>
                in{" "}
            </div>
            <span
                style={{
                    color: "#fdfffc",
                    fontSize: "16px",
                    fontFamily: "monospace",
                }}
            >{`${hrs}h ${mins}m ${secs < 10 ? "0" + secs : secs}s`}</span>
        </div>
    );
};

export default Countdown;
