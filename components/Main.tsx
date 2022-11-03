import React, { useEffect } from "react";
import Content from "./Content";
import useLocalStorageService from "../services/useLocalStorageService";
import { useStore } from "../store/store";

const Main = () => {
    const { setPlayerStats, setBoardState } = useStore();
    const { lsStats, lsBoardState } = useLocalStorageService();

    useEffect(() => {
        if (lsStats) {
            setPlayerStats(lsStats);
        }
        if (lsBoardState) {
            setBoardState(lsBoardState);
        }
    }, [lsBoardState, lsStats, setBoardState, setPlayerStats]);

    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Content />
        </div>
    );
};

export default Main;
