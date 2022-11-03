import React, { useEffect, useState } from "react";
import { ToastStates } from "../../interfaces/modalStates";
import { useStore } from "../../store/store";
import styles from "../../styles/CopiedToast.module.css";

export const CopiedToast = () => {
    const { toastState, setToastState } = useStore();
    const [isCopiedToastOpen, setIsCopiedToastOpen] = useState(false);

    useEffect(() => {
        if (toastState === ToastStates.copied) {
            setIsCopiedToastOpen(true);
        }
    }, [toastState]);

    const closeCopiedToast = () => {
        setToastState(ToastStates.closed);
        setIsCopiedToastOpen(false);
    };

    return (
        <>
            <div
                className={
                    isCopiedToastOpen
                        ? `${styles.show} ${styles.copiedToast}`
                        : `${styles.hide} ${styles.copiedToast}`
                }
            >
                <span>copied to clipboard!</span>
                <span
                    className={styles.closer}
                    onClick={() => closeCopiedToast()}
                >
                    x
                </span>
            </div>
        </>
    );
};
