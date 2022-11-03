import React from "react";
import Image from "next/image";
import { useStore } from "../store/store";
import { ModalStates } from "../interfaces/modalStates";
import useThemeService from "../services/useThemeService";
import { Name } from "./Name";

const Nav = () => {
    const { setModalState } = useStore();
    const { palette } = useThemeService();
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: palette.nav,
                width: "100vw",
                height: "64px",
            }}
        >
            <span style={{ cursor: "pointer", paddingRight: "30px" }}>
                <Image
                    onClick={() => {
                        setModalState(ModalStates.faq);
                    }}
                    width="40px"
                    height="34px"
                    src={`/faq.svg`}
                    alt="faq question mark icon in rough sketchy style"
                />
            </span>

            <h1
                style={{
                    letterSpacing: "1.5px",
                }}
            >
                <Name />
            </h1>

            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "30px",
                }}
            >
                <Image
                    onClick={() => {
                        setModalState(ModalStates.stats);
                    }}
                    style={{
                        textAlign: "center",
                        cursor: "pointer",
                    }}
                    width="40px"
                    height="40px"
                    src={`/stats-icon.svg`}
                    alt="stats bar chart icon in rough sketch style"
                />
            </span>
        </div>
    );
};

export default Nav;
