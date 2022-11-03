import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useStore } from "../store/store";
import Guesses from "./Guesses";
import Input from "./Input";
import Share from "./Share";
import Modal from "./Modal";
import { ModalStates } from "../interfaces/modalStates";
import Faq from "./Faq";
import Stats from "./Stats";
import Countdown from "./Countdown";
import useMapGuidToAreaSvgService from "../services/useMapGuidToAreaSvgService";
import { AnswerToast } from "./AnswerToast/AnswerToast";
import { CopiedToast } from "./CopiedToast/CopiedToast";

const Content = () => {
    const { todaysState, gameOver, modalState } = useStore();
    const [windowHeight, setWindowHeight] = useState("180px");

    useEffect(() => {
        if (window?.innerWidth < 500) {
            setWindowHeight("140px");
        }
    }, [todaysState]);

    const { stateSvgGuid } = useMapGuidToAreaSvgService(
        todaysState?.toLocaleLowerCase()
    );

    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "6px",
                maxWidth: "350px",
            }}
        >
            <AnswerToast />
            <CopiedToast />
            <Image
                width="200px"
                height={windowHeight}
                src={`/counties/${stateSvgGuid}.svg`}
                alt=""
            />
            <Guesses />
            {gameOver ? (
                <>
                    <Countdown />
                    <Share />
                </>
            ) : (
                <Input />
            )}
            <Modal>
                {modalState === ModalStates.faq ? (
                    <Faq />
                ) : modalState === ModalStates.stats ? (
                    <Stats />
                ) : null}
            </Modal>
        </div>
    );
};

export default Content;
