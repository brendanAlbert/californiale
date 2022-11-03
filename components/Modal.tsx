import React from "react";
import { ModalStates } from "../interfaces/modalStates";
import useThemeService from "../services/useThemeService";
import { useStore } from "../store/store";

const Modal = ({ children }: { children: any }) => {
    const { modalState } = useStore();
    const { palette } = useThemeService();
    return (
        <div
            style={{
                display: modalState !== ModalStates.closed ? "block" : "none",
                position: "absolute",
                borderRadius: "10px",
                padding: "18px",
                width: "350px",
                height: "auto",
                backgroundColor: palette.brown,
                color: "#EEE",
                borderTop: "5px solid #000",
                borderRight: "5px solid #000",
                borderLeft: "5px solid #000",
                borderBottom: "14px solid #000",
                zIndex: 3,
                top: 10,
            }}
        >
            <>{children}</>
        </div>
    );
};

export default Modal;
